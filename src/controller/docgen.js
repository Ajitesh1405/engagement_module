const fs = require('fs');
const PizZip = require('pizzip');
const Docxtemplater = require('docxtemplater');
const path = require('path');
const sequelize = require('../database/sequelizeConnection');
const DBQueries = require('../database/dbQueries');

exports.doc = async (req, res) => {
    // Load the Word document template
    const filePath = path.join(__dirname, 'template/EL-template-final.docx')
    const content = fs.readFileSync(filePath, 'binary');

    // console.log("content", content)

    const zip = new PizZip(content);

    const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
        delimiters: {
            start: '<<',
            end: '>>'
        }
    });

    let engId = req.query.eng_id || 1;

    const generateData = await sequelize.query(
        DBQueries.GENERATE_ENGAGEMENT(engId),
        {
            type: sequelize.QueryTypes.SELECT,
            bind: { engId },
            nest: true
        }
    );
    const genObject = generateData[0]
    console.log("genObject", genObject);

    const OPEInclusive = false;

    // Set the templateVariables
    doc.setData({
        DivisionName: 'SPC ',
        BillableServices: genObject.billable_service,
        ClientOrganisationName: genObject.client_organisation_name,
        GroupBillingEntity: genObject.group_billing_entity,
        addressofbillingentity: genObject.billing_entity_address,
        EngagementDate: genObject.engagement_date,
        ClientRepresentative: genObject.client_representative,
        ClientOrganizationName: genObject.client_organisation_name,
        ClientAddress: genObject.client_address,
        Branch: genObject.billing_entity_branch,
        BillingEntityPAN: genObject.billing_entity_pan,
        BillingEntityGST: genObject.billing_entity_gst,
        Backgroundofthecliententity: genObject.background_of_client_entity,
        BackgroundoftheBillableServiceandEngagement: genObject.background_of_the_billable_service_and_engagement,
        EngRole: genObject.role_name,
        EngTeamMember: genObject.engagement_employee,
        Designation: genObject.designation,
        FinancialYear: genObject.financial_year,
        StartingDate: genObject.eng_starting_date,
        DeliverableDate: genObject.eng_deliverables_date,
        L1EnagagementManagerName: genObject.L1EnagagementManagerName,
        ClientSPOCL1Name: genObject.ClientSPOCL1Name,
        L2EnagagementManagerName: genObject.L2EnagagementManagerName,
        CleintSPOCL2Name: genObject.CleintSPOCL2Name,
        L3EngagementPartnerName: genObject.L3EngagementPartnerName,
        CleintSPOCL3Name: genObject.CleintSPOCL3Name,
        Heading: genObject.heading,
        SubHeading: genObject.sub_heading,
        Deliverables: genObject.deliverables,
        DeliveryDate: genObject.delivery_date,
        OurFees: genObject.our_fees,
        BillingSchedule: genObject.billing_schedule,
        BillingMilestone: genObject.billing_milestone,
        MilestonePercent: genObject.milestone_percent,
        MilestoneDeliverables: genObject.milestone_deliverables,
        MilestoneFees: genObject.milestone_fees,
        OPEPercent: genObject.ope_percent,
        OpeAmount: genObject.ope_amount,
        AdminPercent: genObject.admin_percent,
        AdminAmount: genObject.admin_amount,
        OPEInclusive: OPEInclusive ? 'OPE Inclusive' : 'OPE Not Inclusive'
    });

    try {
        // Apply the replacements
        doc.render();
        const buf = doc.getZip().generate({ type: 'nodebuffer' });

        // Define the path to the download folder relative to this script
        const downloadFolderPath = path.join(__dirname, 'download');

        // Check if the download folder exists; if not, create it
        if (!fs.existsSync(downloadFolderPath)) {
            fs.mkdirSync(downloadFolderPath, { recursive: true });
            console.log('Download folder created at:', downloadFolderPath);
        }

        // Define the path to the updated document within the download folder
        const updatedDocPath = path.join(downloadFolderPath, `updated-document-${genObject.client_organisation_name}.docx`);

        // Write the updated document
        fs.writeFileSync(updatedDocPath, buf);
        res.status(201).send("Document has been generated")
    }
    catch (error) {
        // Catch rendering errors
        console.error(error);
        res.status(400).send('Unable to generate document')
    }


}

exports.download = async (req, res) =>{
    try {
        if(!req.query.client_name){
            throw new Error("Please provide Client Name");
        }

        const clientName = req.query.client_name;
        const fileName = `updated-document-${clientName}.docx`;
        const filePath = path.join(__dirname, 'download', fileName);

        res.status(200).download(filePath)
    } catch (error) {
        console.log("error", error);
        res.status(400).send(error.message)
    }
}