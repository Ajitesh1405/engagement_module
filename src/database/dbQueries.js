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

	GET_ENGAGEMENT_EMPOYEES: () =>{
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
	}
}