`use strict';`

module.exports = {
	GET_PERSON_IN_CHARGE: (BranchName, CompanyId) => {
		return `SELECT 
            CONCAT(emp_table.first_name, emp_table.middle_name, emp_table.last_name) AS name,
		    company_table.company_id,
		    company_table.company_name,
		    company_table.branch_name
	        FROM
		        EmpMasters AS emp_table
	        INNER JOIN
		        CompanyMasters AS company_table
	        ON
		        emp_table.company_id = company_table.company_id
	        WHERE
		        company_table.company_id = $CompanyId
	        AND
		        company_table.branch_name = $BranchName`
	},

	GET_ENGAGEMENT_EMPOYEES: () => {
		return `SELECT
			LTRIM(RTRIM(
				CONCAT(
					emp_table.first_name,
					CASE 
						WHEN 
							emp_table.middle_name IS NOT NULL AND emp_table.middle_name <> '' 
							THEN ' ' + emp_table.middle_name + ' '
						ELSE 
							' '
					END,
					emp_table.last_name
				)
			)) AS employee_name,
			emp_table.employee_number AS employee_id
			FROM
				EmpMasters AS emp_table`
	},

	GENERATE_ENGAGEMENT: (engId) => {
		return `
		select 
		company_table.company_name as group_billing_entity,
		company_table.address as billing_entity_address,
		company_table.branch_name as billing_entity_branch,
		company_table.pan_no as billing_entity_pan,
		company_table.gst_no as billing_entity_gst,
		client_table.client_name as client_organisation_name,
		client_table.key_person_name as client_representative,
		client_table.key_person_designation as client_representative_designation,
		client_table.registered_address as client_address,
		service_table.billable_service,
		service_table.service_line,
		service_table.practice_vertical as department,
		master_table.eng_date as engagement_date,
		master_table.bg_of_client_entity as background_of_client_entity,
		master_table.bg_of_the_service_and_eng as background_of_the_billable_service_and_engagement,
		(select Concat(EmpMasters.first_name, EmpMasters.middle_name, EmpMasters.last_name)from EmpMasters where employee_number = master_table.person_incharge_id) as engagement_employee,
		(select skill_name from SkillTags inner join EmpMasters on EmpMasters.skill_tags = SkillTags.skill_id where EmpMasters.employee_number = master_table.person_incharge_id) as designation,
		eng_role_table.role_name,
		master_table.financial_year,
		master_table.start_date as eng_starting_date,
		master_table.deliverables_date as eng_deliverables_date,
		master_table.level_1_billing_entity_remarks as L1EnagagementManagerName,
		master_table.level_1_cr_remarks as ClientSPOCL1Name,
		master_table.level_2_billing_entity_remarks as L2EnagagementManagerName,
		master_table.level_2_cr_remarks as CleintSPOCL2Name,
		master_table.level_3_billing_entity_remarks as L3EngagementPartnerName,
		master_table.level_3_cr_remarks as CleintSPOCL3Name,
		master_table.scope_eng_heading as heading,
		master_table.scope_eng_sub_heading as sub_heading,
		master_table.deliverables as deliverables,
		master_table.delivery_date as delivery_date,
		master_table.fees as our_fees,
		master_table.billing_schedule as billing_schedule,
		(select billing_milestone from BillingMilestones where milestone_id =  master_table.milestone_id) as billing_milestone,
		master_table.milestone_percent as milestone_percent,
		master_table.milestone_deliverables as milestone_deliverables,
		master_table.milestone_fees as milestone_fees,
		master_table.ope_id as ope_percent,
		master_table.ope_amount as ope_amount,
		master_table.admin_id as admin_percent,
		master_table.admin_expense_amount as admin_amount,
		master_table.grand_total
		from
		EngagementMasters as master_table
		inner join
		CompanyMasters as company_table
		on
		company_table.company_id = master_table.billing_entity_id
		inner join
		ClientMasters as client_table
		on
		client_table.client_id = master_table.client_id
		inner join
		ServiceMasters as service_table
		on
		service_table.service_id = master_table.billable_service_id
		inner join
		EngRoles as eng_role_table
		on
		master_table.eng_role_id = eng_role_table.role_id
		where
		master_table.eng_id = $engId`
	}
}