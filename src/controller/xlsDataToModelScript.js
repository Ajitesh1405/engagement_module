const EmpMasters = require('../models/empMaster');
const ServiceMaster = require('../models/serviceMaster');
const EngagementRoles = require('../models/engRoles')
const RoleMaster = require('../models/roleMaster');
const CompanyMaster = require('../models/companyMaster');
const SkillTags = require('../models/skillTags');
const Qualifications = require('../models/qualifications');
const ClientMaster = require('../models/clientMaster');
const xlsx = require('xlsx');
const path = require('path');

// Code to migrate data from xls to database format

// const dir = path.dirname(__dirname);   
// const file_path = path.join(dir, 'Working Master Table.xlsx')
// console.log("file_path: " + file_path)

// async function xslxToJson(file_path) {
//     const workbook = xlsx.readFile(file_path);  // Step 2
//     const workbook_sheet = workbook.SheetNames;                // Step 3
//     const workbook_response = xlsx.utils.sheet_to_json(        // Step 4
//       workbook.Sheets[workbook_sheet[7]]
//     );
//     return workbook_response
// }

// xslxToJson(file_path).then((data)=>console.log(data))

// async function insertDataFromSheet() {
//     const raw_data=await xslxToJson(file_path)
//     for (key in raw_data) {
//         const data = raw_data[key]
//         // console.log(data.employee_number)

//         // await ServiceMaster.create({
//         //     practice_vertical: data.practice_vertical,
//         //     service_line: data.service_line,
//         //     billable_service: data.billable_services || null,
//         //     status: 1
//         // }).then((response) => console.log(response))

//         // await EngagementRoles.create({
//         //     role_id: data.role_id,
//         //     role_name: data.role_name,
//         //     created_by: data.created_by,
//         //     status: data.status
//         // })

        
//         await RoleMaster.create({
//             // role_id: data.role_id,
//             role_name: data.role_name,
//             updated_by: 'Vinayak Puri',
//             status: data.status
//         })

//         // await CompanyMaster.create({
//         //     company_name: data.company_name,
//         //     branch_name: data.branch_name,
//         //     company_type: data.company_type,
//         //     company_email: data.company_email,
//         //     service_id: null,
//         //     company_reg_number: data.company_reg_number,
//         //     pan_no: data.pan_no,
//         //     tan_no: data.tan_no,
//         //     address: data.address,
//         //     gst_no: data.gst_no,
//         //     company_logo: null,
//         //     client_id: null,
//         //     status: 1
//         // })

//         // await EmpMasters.create({
//         //     employee_number: data.employee_number,
//         //     first_name: data.first_name,
//         //     middle_name: data.middle_name,
//         //     last_name: data.last_name,
//         //     email: data.email,
//         //     password: null,
//         //     gender: data.gender,
//         //     nationality: data.nationality,
//         //     contact_number: data.contact_number,
//         //     address: data.address,
//         //     country: data.country,
//         //     company_id: data.company_id,
//         //     service_id: data.service_id,
//         //     job_title: data.job_title,
//         //     skill_tags: data.skill_tags,
//         //     qualifications: data.qulification,
//         //     reporting_manager_id: data.reporting_manager_id,
//         //     worker_type: data.worker_type,
//         //     unique_id: data.unique_id,
//         //     profile_pic: null,
//         //     status: data.status, 
//         //     updated_by: 'Vinayak Puri',
//         // })

//         // await SkillTags.create({
//         //     skill_id: data.skill_id,
//         //     skill_name: data.skill_name,
//         //     created_by: data.created_by,
//         //     status: 1
//         // })

//         // await Qualifications.create({
//         //     qualification_id: data.qualification_id,
//         //     qualification_name: data.qualification_name,
//         //     created_by: data.created_by,
//         //     status: 1
//         // })

//         // await ClientMaster.create({
//         //     client_name: data.client_name,
//         //     organisation_type: data.organisation_type,
//         //     industry_type: data.industry_type,
//         //     client_email: data.client_email,
//         //     registered_address: data.registered_address,
//         //     key_person_name: data.key_person_name,
//         //     key_person_email: data.key_person_email,
//         //     key_person_designation: data.key_person_designation,
//         //     key_person_gender: data.key_person_gender,
//         //     person_incharge_id: data.person_incharge_id,
//         //     billable_financial_year: data.billable_financial_year,
//         //     date_of_first_onbaording: data.date_of_first_onbaording,
//         //     company_id: data.company_id,
//         //     region: data.region,
//         //     deal_origination_person_id: data.organisation_person,
//         //     sales_incharge_person_id: data.sales_incharge_person,
//         //     operation_incharge_person_id: data.operation_incharge_person,
//         //     updated_by: 'Vinayak Puri',
//         //     status: 1
            
//         // })
//     }
// }

// insertDataFromSheet()