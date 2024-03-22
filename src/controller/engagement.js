const EmpMaster = require('../models/empMaster');
const Utility = require('../common/utility');
const { STATUS_CODE, ERROR_MESSAGE, } = require('../common/constant');
const SkillTags = require('../models/skillTags');
const EngRoles = require('../models/engRoles');
const sequelize = require('../database/sequelizeConnection');
const DBQueries = require('../database/dbQueries');
const EngagementMaster = require('../models/engMaster');
const BillingHistory = require('../models/billingHistory');
const ClientCompDetails = require('../models/clientCompDetails');
const WorkScope = require('../models/workScope');
const utility = new Utility();

exports.engagementTeam = async (req, res)=>{
    try {
        const employees = await sequelize.query(
            DBQueries.GET_ENGAGEMENT_EMPOYEES(),
            {
                type: sequelize.QueryTypes.SELECT,
                nest: true
            }
        );
        
        const roles = await EngRoles.findAll({
            attributes: ['role_id', 'role_name'],
            raw: true
        })
        
        const response = await utility.sendResponse(employees, STATUS_CODE.SUCCESS);
        response.roles = roles

        res.send(response)
    } catch (error) {
        console.log("error", error.message)
        // const response = await utility.errorResponse(ERROR_MESSAGE.CLIENT_DETAILS_NOT_FOUND, STATUS_CODE.NOT_FOUND)
        res.send(error.message)
    }
}

exports.createEngagement = async(req, res)=>{
    const t = await sequelize.transaction();
    try {

        if(!req.body){
            throw new Error("Please provide details for user")
        }

        const body = req.body;

        const engagement = await EngagementMaster.create({
            template_id: body.template_id,
            client_id: body.client_id,
            billing_entity_id: body.billing_entity_id,
            person_incharge_id: body.person_incharge_id,
            billable_service_id: body.billable_service_id,
            eng_date: body.eng_date,
            bg_of_client_entity: body.bg_of_client_entity,
            bg_of_the_service_and_eng: body.bg_of_the_service_and_eng,
            scope_eng_heading: body.scope_eng_heading,
            scope_eng_sub_heading: body.scope_eng_sub_heading,
            scope_eng_work: body.scope_eng_work,
            scope_eng_limitations: body.scope_eng_limitations,
            eng_emp_id: body.eng_emp_id,
            eng_role_id: body.eng_role_id,
            financial_year: body.financial_year,
            start_date: Utility.toDate(body.start_date), //date
            deliverables_date: Utility.toDate(body.deliverables_date), //date
            currency_id: body.currency_id,
            frequency_id: body.frequency_id,
            billing_freq_date: body.billing_freq_date,
            scope_of_work: body.scope_of_work,
            deliverables: body.deliverables,
            delivery_date: body.delivery_date,
            fees: body.fees,
            billing_schedule: body.billing_schedule,
            milestone_id: body.milestone_id,
            milestone_percent: body.milestone_percent,
            milestone_deliverables: body.milestone_deliverables,
            milestone_fees: body.milestone_fees,
            ope_id: body.ope_id,
            ope_amount: body.ope_amount,
            admin_id: body.admin_id,
            admin_expense_amount: body.admin_expense_amount,
            tax_id: body.tax_id,
            grand_total: body.grand_total,
            level_1_billing_entity_id: body.level_1_billing_entity_id,
            level_2_billing_entity_id: body.level_2_billing_entity_id,
            level_3_billing_entity_id: body.level_3_billing_entity_id,
            reviwer_id: body.reviwer_id,
            status: 1,
        
        },
        {
            transaction: t
        },
        { raw: true }
        );

        const engObject = engagement.dataValues;

        const workscope = await WorkScope.create({
            eng_id: engObject.eng_id,
            heading: engObject.scope_eng_heading,
            sub_heading: engObject.scope_eng_sub_heading,
            work_scope: engObject.scope_eng_work,
            scope_limitations: engObject.scope_eng_limitations,
            status: 1
        },
        {
            transaction: t
        },
        {
            raw: true
        }
        )

        const workscopeObject = workscope.dataValues;

        await BillingHistory.create({
            eng_id: engObject.eng_id,
            billing_currency_id: engObject.currency_id,
            billing_freq_id: engObject.frequency_id,
            scope_id: workscopeObject.scope_id,
            milestone_id: engObject.milestone_id,
            milestone_percent: engObject.milestone_percent,
            milestone_fees: engObject.milestone_fees,
            billing_ope_id: engObject.ope_id,
            billing_ope_amount: engObject.ope_amount,
            tax_id: engObject.tax_id,
            total: engObject.grand_total,
            status: 1
        },
        {
            transaction: t
        },
        {
            raw: true
        }
        );

        await ClientCompDetails.create({
            client_id: engObject.client_id,
            company_id: engObject.billing_entity_id,
            eng_id: engObject.eng_id,
            status: 1
        },
        {
            transaction: t
        },
        {
            raw: true
        }
        );


        const response = await utility.sendResponse(engagement, STATUS_CODE.CREATE_USER);
        t.commit();
        res.send(response);

    } catch (error) {
        t.rollback()
        console.log("error", error.message)
        const response = await utility.errorResponse(ERROR_MESSAGE.ENGAGEMENT_CREATION_FAILED, STATUS_CODE.FAIL)
        res.send(response)
    }
}