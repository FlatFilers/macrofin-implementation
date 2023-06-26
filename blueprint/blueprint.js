export const blueprint = [
  {
    name: "Customers",
    slug: "customers/Customers",
    access: ["*"],
    fields: [
      {
        key: "externalId",
        type: "string",
        label: "ExternalID",
        readonly: false,
        constraints: [
          {
            type: "unique",
          },
        ],
        description:
          "This is the Unique backend Identifier for a Customer Record. Should be Unique for all the Customer Records. This can be used to create a Parent-Child Relationship and to link other record sets with these Customers.",
      },
      {
        key: "entityId",
        type: "string",
        label: "Customer ID",
        readonly: false,
        constraints: [
          {
            type: "required",
          },
          {
            type: "unique",
          },
        ],
        description:
          "This is the Front-End Customer ID. It will be combined with the Company or Invididual Name to create the full Entity ID.   ID should be unique for all  Customers. This field is not required if you use Auto-Generated Numbers.",
      },
      {
        key: "isperson",
        type: "boolean",
        label: "Individual",
        readonly: false,
        constraints: [],
        description:
          "Records TRUE/FALSE. Please put TRUE if the Customer is an individual.",
      },
      {
        key: "salutation",
        type: "enum",
        label: "Mr./Ms...",
        config: {
          options: [
            {
              label: "Mr.",
              value: "1",
            },
            {
              label: "Ms.",
              value: "2",
            },
            {
              label: "Mrs.",
              value: "3",
            },
            {
              label: "PhD",
              value: "4",
            },
            {
              label: "JD",
              value: "5",
            },
            {
              label: "Esq",
              value: "6",
            },
            {
              label: "Rev",
              value: "7",
            },
          ],
        },
        readonly: false,
        constraints: [],
        description:
          "(Need category mappings) Optional field if the Customer is an Individual. Leave blank for Companies.",
      },
      {
        key: "firstname",
        type: "string",
        label: "First Name",
        readonly: false,
        constraints: [],
        description:
          "(need requiredWith logic) Required field if the Customer is an Individual. ",
      },
      {
        key: "middlename",
        type: "string",
        label: "Middle Name",
        readonly: false,
        constraints: [],
        description:
          "Optional field if the Customer is an Individual.  Leave blank for Companies.",
      },
      {
        key: "lastname",
        type: "string",
        label: "Last Name",
        readonly: false,
        constraints: [],
        description:
          "(Need requiredWith logic) Required field if the Customer is an Individual. Leave blank for Companies.",
      },
      {
        key: "title",
        type: "string",
        label: "Job Title",
        readonly: false,
        constraints: [],
        description: "For individual customers, leave blank for Companies.",
      },
      {
        key: "companyname",
        type: "string",
        label: "Company Name",
        readonly: false,
        constraints: [],
        description:
          "(Need requiredWith logic) Required field if the Customer is a Company. Leave blank for Individual customers",
      },
      {
        key: "parent",
        type: "string",
        label: "Child Of",
        readonly: false,
        constraints: [],
        description:
          "(Need Lookup/Relational logic) ParentHandle field is used to create the Parent-Child Relationship for the Customers.  You can use parent Customer ID/Name or External ID. Please make sure to populate the template such that the Parent Records are given in rows above the Child records.",
      },
      {
        key: "status",
        type: "reference",
        label: "Status",
        config: {
          key: "name",
          ref: "customers/Status_NetSuite_Extract",
          relationship: "has-many",
        },
        readonly: false,
        constraints: [
          {
            type: "required",
          },
        ],
        description:
          "This field should have the reference to Customer statuses that must exist in your account prior to importing.  You can create a new Customer status at Setup > Sales > Customer Statuses > New.",
      },
      {
        key: "subsidiary",
        type: "reference",
        label: "Subsidiary",
        config: {
          key: "Name",
          ref: "customers/Subsidiary_NetSuite_Extract",
          relationship: "has-many",
        },
        readonly: false,
        constraints: [
          {
            type: "required",
          },
        ],
        description:
          "(array mapped to multiple FKs) This is a reference to the subsidiary which must be created in your account prior to import.    In case you want to refer a child subsidiary the complete hierarchy must be provided in the format: Parent Subsidiary Name : Child Subsidiary Name.  The delimiter to be used for selecting multiple subsidiaries is a pipe ( | ), without spaces between the two subsidiary references.  This field becomes mandatory if you are using a NetSuite One-World account.",
      },
      {
        key: "salesrep",
        type: "reference",
        label: "Sales Rep",
        config: {
          key: "entityId",
          ref: "customers/Employees",
          relationship: "has-many",
        },
        readonly: false,
        constraints: [],
        description:
          "(Lookup field) Provide the reference to the Sales Rep associated with this Customer. The Employee record must exist in your account prior to importing.   The Sales Rep checkbox must be marked in Lists > Employees > Human Resources.",
      },
      {
        key: "url",
        type: "string",
        label: "Web Address",
        readonly: false,
        constraints: [],
        description:
          "Must be the complete URL of the company. Ex. http://www.netsuite.com",
      },
      {
        key: "category",
        type: "reference",
        label: "Category",
        config: {
          key: "name",
          ref: "customers/Customer_Category_NetSuite_Extract",
          relationship: "has-many",
        },
        readonly: false,
        constraints: [],
        description:
          "Provide the Category reference for this Customer.   It must exist in Setup > Accounting > Accounting Lists > New > Customer Category prior to importing.",
      },
      {
        key: "defaultorderpriority",
        type: "number",
        label: "Default Order Priority",
        readonly: false,
        constraints: [],
        description:
          "Enter a number to designate the priority for this customer.  To utilize the priority-based item commitment functionality in your account, you must mark customer records to prioritize the importance of filling orders for customers. Then, transactions are processed based on the indicated priority of the selected customer.",
      },
      {
        key: "comments",
        type: "string",
        label: "Comments",
        readonly: false,
        constraints: [],
        description:
          "These are the general Comments for the Customers. Should not be used to put the User Notes.",
      },
      {
        key: "email",
        type: "string",
        label: "Email",
        readonly: false,
        constraints: [],
        description:
          "This field should contain the main E-mail Address of the Customer.  The Information entered for this field must conform to the standard e-mail Address format. i.e.user@domain.com",
      },
      {
        key: "altEmail",
        type: "string",
        label: "Alt. Email",
        readonly: false,
        constraints: [],
        description:
          "This field is only available for Individual Customers.  This field should contain the alternate E-mail Address of the Customer.    The Information entered for this field must conform to the standard e-mail Address format. i.e. user@domain.com.",
      },
      {
        key: "phone",
        type: "string",
        label: "Phone",
        readonly: false,
        constraints: [],
        description:
          "The Information entered for this field can be in one of the following formats: 999-999-9999 (999) 999-9999 1-999-999-9999 1 (999) 999-9999 999-999-9999 ext 999 +44 (0) 1234-4567-568",
      },
      {
        key: "altPhone",
        type: "string",
        label: "Alt. Phone",
        readonly: false,
        constraints: [],
        description:
          "This field is only available for Individual Customers.  The Information entered for this field can be in one of the following formats: 999-999-9999 (999) 999-9999 1-999-999-9999 1 (999) 999-9999 999-999-9999 ext 999 +44 (0) 1234-4567-568",
      },
      {
        key: "mobilePhone",
        type: "string",
        label: "Mobile Phone",
        readonly: false,
        constraints: [],
        description:
          "This field is only available for Individual Customers.  The Information entered for this field can be in one of the following formats: 999-999-9999 (999) 999-9999 1-999-999-9999 1 (999) 999-9999 999-999-9999 ext 999 +44 (0) 1234-4567-568",
      },
      {
        key: "homePhone",
        type: "string",
        label: "Home Phone",
        readonly: false,
        constraints: [],
        description:
          "This field is only available for Individual Customers.  The Information entered for this field can be in one of the following formats: 999-999-9999 (999) 999-9999 1-999-999-9999 1 (999) 999-9999 999-999-9999 ext 999 +44 (0) 1234-4567-568",
      },
      {
        key: "fax",
        type: "string",
        label: "Fax",
        readonly: false,
        constraints: [],
        description:
          "The Information entered for this field can be in one of the following formats: 999-999-9999 (999) 999-9999 1-999-999-9999 1 (999) 999-9999 999-999-9999 ext 999 +44 (0) 1234-4567-568",
      },
      {
        key: "Address1_AddressName",
        type: "string",
        label: "Label",
        readonly: false,
        constraints: [],
        description:
          "This field is only required if you use the AddressList element. It maps to the Label of an Address and indicates the beginning of an individual Address.   The Label must be unique for all the different Addresses for this Customer.",
      },
      {
        key: "Address1_attention",
        type: "string",
        label: "Attention",
        readonly: false,
        constraints: [],
        description: "Enter the name of the Individual in this field.",
      },
      {
        key: "Address1_Addressee",
        type: "string",
        label: "Addressee",
        readonly: false,
        constraints: [],
        description: "Enter the Addressee or the Company Name here.",
      },
      {
        key: "Address1_phone",
        type: "string",
        label: "Phone",
        readonly: false,
        constraints: [],
        description: "Enter a phone number for your Customer. ",
      },
      {
        key: "Address1_line1",
        type: "string",
        label: "Address 1",
        readonly: false,
        constraints: [],
        description: "Enter the Address Line 1 in this field.",
      },
      {
        key: "Address1_line2",
        type: "string",
        label: "Address 2",
        readonly: false,
        constraints: [],
        description: "Enter the Address Line 2 in this field.",
      },
      {
        key: "Address1_city",
        type: "string",
        label: "Address1 City",
        readonly: false,
        constraints: [],
        description: "Enter the City of the Address in this field.",
      },
      {
        key: "Address1_state",
        type: "reference",
        label: "Province/State",
        config: {
          key: "State",
          ref: "customers/States_NetSuite_Extract",
          relationship: "has-many",
        },
        readonly: false,
        constraints: [],
        description:
          "(need Lookup field) Enter the State in this field. You may enter the standard abbreviation or the full state or province name.",
      },
      {
        key: "Address1_zipCode",
        type: "string",
        label: "Postal Code/Zip",
        readonly: false,
        constraints: [],
        description: "Enter the Zip Code of the Address in this field.",
      },
      {
        key: "Address1_country",
        type: "reference",
        label: "Country",
        config: {
          key: "Countries",
          ref: "customers/Countries_NetSuite_Extract",
          relationship: "has-many",
        },
        readonly: false,
        constraints: [
          {
            type: "required",
          },
        ],
        description:
          "(need Lookup field) This is the Reference to the Country of this Address. It must match the List of the Countries in NetSuite.",
      },
      {
        key: "Address1_defaultBilling",
        type: "boolean",
        label: "Default Billing",
        readonly: false,
        constraints: [],
        description:
          "If this Address is to be marked as a Default Billing Address, please put TRUE.   Otherwise, enter FALSE if this is NOT a Default Billing Address.",
      },
      {
        key: "Address1_defaultShipping",
        type: "boolean",
        label: "Default Shipping",
        readonly: false,
        constraints: [],
        description:
          "If this Address is to be marked as a Default Shipping Address, please put TRUE.   Otherwise, enter FALSE if this is it NOT a Default Shipping Address.",
      },
      {
        key: "accountnumber",
        type: "number",
        label: "Account Number",
        readonly: false,
        constraints: [],
        description: "Account Number shared with the Customer.",
      },
      {
        key: "defaultreceivablesaccount",
        type: "reference",
        label: "Default Receivables Account",
        config: {
          key: "Account Name",
          ref: "customers/Chart_of_Accounts_NetSuite_Extract",
          relationship: "has-many",
        },
        readonly: false,
        constraints: [],
        description:
          "(need Lookup field) Choose the A/R account to use by default on receivables transactions for this customer.  If you select Use System Preference, the account selected at Setup > Accounting > Accounting Preferences > Items/Transactions in the Default Receivables Account field is used as this customer's default.",
      },
      {
        key: "currency",
        type: "reference",
        label: "Currency",
        config: {
          key: "Name",
          ref: "customers/Currency_NetSuite_Extract",
          relationship: "has-many",
        },
        readonly: false,
        constraints: [],
        description:
          "This element is a reference to a currency record that must exist in  your account prior to importing.  The currency used must match the  currency selected on the customer's record.",
      },
      {
        key: "terms",
        type: "reference",
        label: "Terms",
        config: {
          key: "description",
          ref: "customers/Terms_NetSuite_Extract",
          relationship: "has-many",
        },
        readonly: false,
        constraints: [],
        description:
          "(need enum values) This field should have the  reference to default terms that you have with this Customer.   These records must exist in Setup > Accounting > Accounting Lists > Terms prior to importing.",
      },
      {
        key: "creditlimit",
        type: "string",
        label: "Credit Limit",
        readonly: false,
        constraints: [],
        description:
          "This is the Credit Limit you would want to set for the Sales transactions with this Customer.",
      },
      {
        key: "hold",
        type: "enum",
        label: "Hold",
        config: {
          options: [
            {
              label: "Auto",
              value: "auto",
            },
            {
              label: "On",
              value: "on",
            },
            {
              label: "Off",
              value: "off",
            },
          ],
        },
        readonly: false,
        constraints: [],
        description:
          "Select one of the following:  Select Auto if you want this customer's credit status to follow the rules you set at > > Accounting Preferences. Select On to manually apply a credit hold on this customer. Select Off to manually remove a credit hold on this customer.",
      },
      {
        key: "vatregnumber",
        type: "number",
        label: "Tax Reg. Number",
        readonly: false,
        constraints: [],
        description: "Enter this Customer's tax registration number.",
      },
      {
        key: "resaleNumber",
        type: "number",
        label: "Resale Number",
        readonly: false,
        constraints: [],
        description:
          "If you do not collect Sales tax from this Customer because your merchandise will be resold, enter your Customer's appropriate tax license number here.",
      },
      {
        key: "emailTransaction",
        type: "boolean",
        label: "Email Transaction",
        readonly: false,
        constraints: [],
        description:
          "Defaults to False - don't want customer to override the value",
      },
      {
        key: "inactive",
        type: "boolean",
        label: "Inactive",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "DRAccount",
        type: "string",
        label: "DRAccount",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "jobCode",
        type: "string",
        label: "Job Code",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "goLiveDate",
        type: "string",
        label: "Go Live Date",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "goLiveYear",
        type: "number",
        label: "Go Live Year",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "winProjectType",
        type: "reference",
        label: "Win Project Type",
        config: {
          key: "name",
          ref: "customers/Win_Project_Type_Values",
          relationship: "has-many",
        },
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "complexity",
        type: "string",
        label: "Complexity",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "multipleWorkstreams",
        type: "string",
        label: "Multiple Workstreams",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "industry",
        type: "reference",
        label: "Industry",
        config: {
          key: "name",
          ref: "customers/Industry_Values",
          relationship: "has-many",
        },
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "goodForReference",
        type: "enum",
        label: "Good for reference?",
        config: {
          options: [
            {
              label: "Yes",
              value: "yes",
            },
            {
              label: "Once Live",
              value: "once_live",
            },
          ],
        },
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "peFirm",
        type: "string",
        label: "PE Firm",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "saasRevRec",
        type: "boolean",
        label: "SaaS / Rev Rec",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "multiCountry",
        type: "boolean",
        label: "Multi Country",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "salesforce",
        type: "boolean",
        label: "Salesforce",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "lead_c",
        type: "reference",
        label: "Lead C",
        config: {
          key: "entityId",
          ref: "customers/Employees",
          relationship: "has-many",
        },
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "impStatus",
        type: "enum",
        label: "Imp Status",
        config: {
          options: [
            {
              label: "Old",
              value: "Old",
            },
            {
              label: "New",
              value: "New",
            },
          ],
        },
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "tmRate",
        type: "number",
        label: "T&M Rate",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "discount",
        type: "number",
        label: "Discount",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "nsGoLiveYear",
        type: "enum",
        label: "NS Go Live Year",
        config: {
          options: [
            {
              label: "NS 20/21",
              value: "20-21",
            },
            {
              label: "NS 21/22",
              value: "21-22",
            },
            {
              label: "NS 22/23",
              value: "22-23",
            },
            {
              label: "NS 23/24",
              value: "23-24",
            },
            {
              label: "NS 24/25",
              value: "24-25",
            },
            {
              label: "NS 25/26",
              value: "25-26",
            },
          ],
        },
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "contact1_email",
        type: "string",
        label: "Contact 1 Email",
        readonly: false,
        constraints: [],
        description:
          "The Information entered for this field must conform to the standard e-mail Address format. i.e.user@domain.com",
      },
      {
        key: "contact1_fname",
        type: "string",
        label: "Contact 1 First Name",
        readonly: false,
        constraints: [],
        description:
          "(need requiredWith logic) Required field if the Customer is an Individual. ",
      },
      {
        key: "contact1_lname",
        type: "string",
        label: "Contact 1 Last Name",
        readonly: false,
        constraints: [],
        description:
          "(Need requiredWith logic) Required field if the Customer is an Individual. Leave blank for Companies.",
      },
      {
        key: "contact2_email",
        type: "string",
        label: "Contact 2 Email",
        readonly: false,
        constraints: [],
        description:
          "The Information entered for this field must conform to the standard e-mail Address format. i.e.user@domain.com",
      },
      {
        key: "contact2_fname",
        type: "string",
        label: "Contact 2 First Name",
        readonly: false,
        constraints: [],
        description:
          "(need requiredWith logic) Required field if the Customer is an Individual. ",
      },
      {
        key: "contact2_lname",
        type: "string",
        label: "Contact 2 Last Name",
        readonly: false,
        constraints: [],
        description:
          "(Need requiredWith logic) Required field if the Customer is an Individual. Leave blank for Companies.",
      },
      {
        key: "contact3_email",
        type: "string",
        label: "Contact 3 Email",
        readonly: false,
        constraints: [],
        description:
          "The Information entered for this field must conform to the standard e-mail Address format. i.e.user@domain.com",
      },
      {
        key: "contact3_fname",
        type: "string",
        label: "Contact 3 First Name",
        readonly: false,
        constraints: [],
        description:
          "(need requiredWith logic) Required field if the Customer is an Individual. ",
      },
      {
        key: "contact3_lname",
        type: "string",
        label: "Contact 3 Last Name",
        readonly: false,
        constraints: [],
        description:
          "(Need requiredWith logic) Required field if the Customer is an Individual. Leave blank for Companies.",
      },
      {
        key: "contact4_email",
        type: "string",
        label: "Contact 4 Email",
        readonly: false,
        constraints: [],
        description:
          "The Information entered for this field must conform to the standard e-mail Address format. i.e.user@domain.com",
      },
      {
        key: "contact4_fname",
        type: "string",
        label: "Contact 4 First Name",
        readonly: false,
        constraints: [],
        description:
          "(need requiredWith logic) Required field if the Customer is an Individual. ",
      },
      {
        key: "contact4_lname",
        type: "string",
        label: "Contact 4 Last Name",
        readonly: false,
        constraints: [],
        description:
          "(Need requiredWith logic) Required field if the Customer is an Individual. Leave blank for Companies.",
      },
    ],
    readonly: true,
  },
  {
    name: "Status (NetSuite Extract)",
    slug: "customers/Status_NetSuite_Extract",
    access: ["*"],
    fields: [
      {
        key: "internalID",
        type: "string",
        label: "Internal ID",
        readonly: false,
        constraints: [
          {
            type: "unique",
          },
        ],
        description: "",
      },
      {
        key: "name",
        type: "string",
        label: "Name ID",
        readonly: false,
        constraints: [
          {
            type: "unique",
          },
        ],
        description: "",
      },
    ],
    readonly: true,
  },
  {
    name: "Subsidiary (NetSuite Extract)",
    slug: "customers/Subsidiary_NetSuite_Extract",
    access: ["*"],
    fields: [
      {
        key: "Internal_Id",
        type: "string",
        label: "Internal Id",
        readonly: false,
        constraints: [
          {
            type: "unique",
          },
        ],
        description: "",
      },
      {
        key: "External_Id",
        type: "string",
        label: "External Id",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "Name",
        type: "string",
        label: "Name",
        readonly: false,
        constraints: [
          {
            type: "unique",
          },
        ],
        description: "",
      },
      {
        key: "currency",
        type: "reference",
        label: "Currency",
        config: {
          key: "Name",
          ref: "customers/Currency_NetSuite_Extract",
          relationship: "has-many",
        },
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "inactive",
        type: "boolean",
        label: "Inactive",
        readonly: false,
        constraints: [
          {
            type: "required",
          },
        ],
        description: "",
      },
      {
        key: "IsElimination",
        type: "boolean",
        label: "Is Elimination",
        readonly: false,
        constraints: [],
        description: "",
      },
    ],
    readonly: true,
  },
  {
    name: "Employees",
    slug: "customers/Employees",
    access: ["*"],
    fields: [
      {
        key: "externalid",
        type: "string",
        label: "External ID",
        readonly: false,
        constraints: [
          {
            type: "required",
          },
          {
            type: "unique",
          },
        ],
        description:
          "This is the Unique backend Identifier for an Employee Record. Should be unique for all Entity Records. This can be used to link other record sets with this Employee.",
      },
      {
        key: "entityId",
        type: "string",
        label: "Entity ID",
        readonly: false,
        constraints: [
          {
            type: "required",
          },
          {
            type: "unique",
          },
        ],
        description:
          "Can be left blank if you use auto-numbering for Employee IDs.  We recommend not using the auto-numbering for employees. Instead use the original Employee ID if any or Concatenate the First Name and Last Name values.",
      },
      {
        key: "isInactive",
        type: "boolean",
        label: "Is Inactive",
        readonly: false,
        constraints: [],
        description: "Enter TRUE here if this account is inactive.",
      },
      {
        key: "firstName",
        type: "string",
        label: "First Name",
        readonly: false,
        constraints: [
          {
            type: "required",
          },
        ],
        description: "Enter the First Name of the Employee.",
      },
      {
        key: "middleName",
        type: "string",
        label: "Middle Name",
        readonly: false,
        constraints: [],
        description: "Enter the Middle Name of the Employee.",
      },
      {
        key: "lastName",
        type: "string",
        label: "Last Name",
        readonly: false,
        constraints: [
          {
            type: "required",
          },
        ],
        description: "Enter the Last Name of the Employee.",
      },
      {
        key: "email",
        type: "string",
        label: "Email",
        readonly: false,
        constraints: [],
        description:
          "This field should contain the main E-mail Address of the Employee. The information entered for this field must conform to the standard e-mail Address format. i.e. user@domain.com",
      },
      {
        key: "phone",
        type: "string",
        label: "Phone",
        readonly: false,
        constraints: [],
        description:
          "The information entered for this field can be in one of the following formats: 999-999-9999 (999) 999-9999 1-999-999-9999 1 (999) 999-9999 999-999-9999 ext 999 +44 (0) 1234-4567-568",
      },
      {
        key: "officephone",
        type: "string",
        label: "Office Phone",
        readonly: false,
        constraints: [],
        description:
          "The information entered for this field can be in one of the following formats: 999-999-9999 (999) 999-9999 1-999-999-9999 1 (999) 999-9999 999-999-9999 ext 999 +44 (0) 1234-4567-568",
      },
      {
        key: "mobilephone",
        type: "string",
        label: "Mobile Phone",
        readonly: false,
        constraints: [],
        description:
          "The information entered for this field can be in one of the following formats: 999-999-9999 (999) 999-9999 1-999-999-9999 1 (999) 999-9999 999-999-9999 ext 999 +44 (0) 1234-4567-568",
      },
      {
        key: "subsidiary",
        type: "reference",
        label: "Subsidiary",
        config: {
          key: "Name",
          ref: "customers/Subsidiary_NetSuite_Extract",
          relationship: "has-many",
        },
        readonly: false,
        constraints: [
          {
            type: "required",
          },
        ],
        description:
          "This is a reference to the subsidiary which must be created in your account prior to import.    In case you want to refer a child subsidiary the complete hierarchy must be provided in the format: Parent Subsidiary Name : Child Subsidiary Name.  The delimiter to be used for selecting multiple subsidiaries is a pipe ( | ), without spaces between the two subsidiary references.  This field becomes mandatory if you are using a NetSuite One-World account.",
      },
      {
        key: "department",
        type: "reference",
        label: "Department",
        config: {
          key: "name",
          ref: "customers/Department",
          relationship: "has-many",
        },
        readonly: false,
        constraints: [],
        description:
          "A reference to a department that must exist in Setup > Company > Department prior to import.",
      },
      {
        key: "class",
        type: "reference",
        label: "Class",
        config: {
          key: "name",
          ref: "customers/Classes",
          relationship: "has-many",
        },
        readonly: false,
        constraints: [],
        description:
          "A reference to a class that must exist in Setup > Company > Classes prior to import.",
      },
      {
        key: "location",
        type: "reference",
        label: "Location",
        config: {
          key: "name",
          ref: "customers/Location",
          relationship: "has-many",
        },
        readonly: false,
        constraints: [],
        description:
          "A reference to a location that must exist in Setup > Company > Locations prior to import.",
      },
      {
        key: "employeetype",
        type: "string",
        label: "Employee Type",
        readonly: false,
        constraints: [],
        description:
          "This is the reference to the Employee Type.   The Employee Type list should be created in NetSuite prior to import.  To review or add employee type definitions, go to Setup > Accounting > Employee Related Lists > Employee Type.",
      },
      {
        key: "title",
        type: "string",
        label: "Job Title",
        readonly: false,
        constraints: [],
        description: "Enter the employee's official job title here.",
      },
      {
        key: "jobdescription",
        type: "string",
        label: "Job Description",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "employeestatus",
        type: "string",
        label: "Employee Status",
        readonly: false,
        constraints: [],
        description:
          "Enter the employee status.  This must be created in Setup > Accounting > Employee Related Lists > Employee Status.",
      },
      {
        key: "supervisor",
        type: "string",
        label: "Supervisor",
        readonly: false,
        constraints: [],
        description:
          "Select the name of your employee's supervisor.  This person approves expense reports and purchase requests.  If the employee doesn't have a supervisor, use the Approver field to select the person who approves this employee's expense reports and purchase requests.",
      },
      {
        key: "issalesrep",
        type: "boolean",
        label: "Sales Rep",
        readonly: false,
        constraints: [],
        description: "Put TRUE to mark this Employee as a Sales Rep",
      },
      {
        key: "hiredate",
        type: "string",
        label: "Hire Date",
        readonly: false,
        constraints: [],
        description:
          "Date should be entered in the format that is supported by your account.   The date preference can be set by navigating to Setup > Company > General Preferences.",
      },
      {
        key: "lastreviewdate",
        type: "string",
        label: "Last Review Date",
        readonly: false,
        constraints: [],
        description:
          "Enter the Last Review date for this Employee. Date should be entered in the format that is supported by your account.   The date preference can be set by navigating to Setup > Company > General Preferences.",
      },
      {
        key: "nextreviewdate",
        type: "string",
        label: "Next Review Date",
        readonly: false,
        constraints: [],
        description:
          "Enter the Next Review date for this Employee. Date should be entered in the format that is supported by your account.   The date preference can be set by navigating to Setup > Company > General Preferences.",
      },
      {
        key: "releasedate",
        type: "string",
        label: "Release Date",
        readonly: false,
        constraints: [],
        description: "Enter this person's last date of employment.",
      },
      {
        key: "expenselimit",
        type: "number",
        label: "Expense Limit",
        readonly: false,
        constraints: [],
        description:
          "Enter the amount this employee can expense without approval from a supervisor or approver.",
      },
      {
        key: "approver",
        type: "string",
        label: "Approver",
        readonly: false,
        constraints: [],
        description:
          "Enter the person that approves the employee's expense reports. If no approver is selected, the employee's supervisor approves expense reports.   If an expense approver is selected, the supervisor is no longer part of the approval hierarchy. ",
      },
      {
        key: "approvallimit",
        type: "number",
        label: "Expense Approval Limit",
        readonly: false,
        constraints: [],
        description:
          "Enter the maximum amount this employee is allowed to approve on an expense report when specified as an approver for another employee.  Expenses that exceed this amount must be approved by another supervisor or approver with a sufficient approval limit.",
      },
      {
        key: "purchaseorderlimit",
        type: "number",
        label: "Purchase Order Limit",
        readonly: false,
        constraints: [],
        description:
          "In the Purchase Limit field, enter the amount this employee can purchase without approval from a supervisor or approver. ",
      },
      {
        key: "purchaseorderapprover",
        type: "string",
        label: "Purchase Approver",
        readonly: false,
        constraints: [],
        description:
          "Enter the person that approves the employee's purchase requests. If no approver is selected, the supervisor approves purchase requests. In order to associate a approver record with this employee, please make sure to create the template such that the approver record is given at the row above. Use the ExternalID of the approver in this field.",
      },
      {
        key: "purchaseorderapprovallimit",
        type: "number",
        label: "Purchase Approver Limit",
        readonly: false,
        constraints: [],
        description:
          "Enter the maximum amount an employee is allowed to approve on a purchase request when specified as an approver for an employee.",
      },
      {
        key: "address1_addressName",
        type: "string",
        label: "Address 1 - Address Name",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "address1_attention",
        type: "string",
        label: "Address 1 - Attention",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "address1_addressee",
        type: "string",
        label: "Address 1 - Addressee",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "address1_phone",
        type: "string",
        label: "Address 1 - Phone",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "address1_line1",
        type: "string",
        label: "Address 1 - Address Line 1",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "address1_line2",
        type: "string",
        label: "Address1 - Address Line 2",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "address1_city",
        type: "string",
        label: "Address 1 - City",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "address1_state",
        type: "reference",
        label: "Address 1 - State",
        config: {
          key: "State",
          ref: "customers/States_NetSuite_Extract",
          relationship: "has-many",
        },
        readonly: false,
        constraints: [],
        description:
          "Enter the State in this field. You may enter the standard abbreviation or the full state or province name.",
      },
      {
        key: "address1_zipCode",
        type: "string",
        label: "Address 1 - Zip Code",
        readonly: false,
        constraints: [],
        description: "Enter the Zip Code of the Address in this field.",
      },
      {
        key: "address1_country",
        type: "reference",
        label: "Address 1 - Country",
        config: {
          key: "Countries",
          ref: "customers/Countries_NetSuite_Extract",
          relationship: "has-many",
        },
        readonly: false,
        constraints: [],
        description:
          "This is the Reference to the Country of this Address. It must match the List of the Countries in NetSuite",
      },
      {
        key: "address1_defaultBilling",
        type: "boolean",
        label: "Address 1 - Default Billing",
        readonly: false,
        constraints: [],
        description:
          "If this Address is to be marked as a Default Billing Address, please put TRUE. Otherwise, enter FALSE",
      },
      {
        key: "address1_defaultShipping",
        type: "boolean",
        label: "Address 1 - Default Shipping",
        readonly: false,
        constraints: [],
        description:
          "If this Address is to be marked as a Default Shipping Address, please put TRUE. Otherwise, enter FALSE",
      },
      {
        key: "address2_addressName",
        type: "string",
        label: "Address 2 - Address Name",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "address2_attention",
        type: "string",
        label: "Address 2 - Attention",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "address2_addressee",
        type: "string",
        label: "Address 2 - Addressee",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "address2_phone",
        type: "string",
        label: "Address 2 - Phone",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "address2_line1",
        type: "string",
        label: "Address 2 - Address Line 1",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "address2_line2",
        type: "string",
        label: "Address2 - Address Line 2",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "address2_city",
        type: "string",
        label: "Address 2 - City",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "address2_state",
        type: "reference",
        label: "Address 2 - State",
        config: {
          key: "State",
          ref: "customers/States_NetSuite_Extract",
          relationship: "has-many",
        },
        readonly: false,
        constraints: [],
        description:
          "Enter the State in this field. You may enter the standard abbreviation or the full state or province name.",
      },
      {
        key: "address2_zipCode",
        type: "string",
        label: "Address 2 - Zip Code",
        readonly: false,
        constraints: [],
        description: "Enter the Zip Code of the Address in this field.",
      },
      {
        key: "address2_country",
        type: "reference",
        label: "Address 2 - Country",
        config: {
          key: "Countries",
          ref: "customers/Countries_NetSuite_Extract",
          relationship: "has-many",
        },
        readonly: false,
        constraints: [],
        description:
          "This is the Reference to the Country of this Address. It must match the List of the Countries in NetSuite",
      },
      {
        key: "address2_defaultBilling",
        type: "boolean",
        label: "Address 2 - Default Billing",
        readonly: false,
        constraints: [],
        description:
          "If this Address is to be marked as a Default Billing Address, please put TRUE. Otherwise, enter FALSE",
      },
      {
        key: "address2_defaultShipping",
        type: "boolean",
        label: "Address 2 - Default Shipping",
        readonly: false,
        constraints: [],
        description:
          "If this Address is to be marked as a Default Shipping Address, please put TRUE. Otherwise, enter FALSE",
      },
      {
        key: "timeapprover",
        type: "string",
        label: "Time Approver",
        readonly: false,
        constraints: [],
        description:
          "In the Time Approver field, select the person that approves the employee's time transactions. If no time approver is selected, the employee's supervisor approves time entries.    If both a supervisor and a time approver are selected, either can approve time entries.",
      },
    ],
    readonly: false,
  },
  {
    name: "Customer Category (NetSuite Extract)",
    slug: "customers/Customer_Category_NetSuite_Extract",
    access: ["*"],
    fields: [
      {
        key: "internalID",
        type: "string",
        label: "Internal ID",
        readonly: false,
        constraints: [
          {
            type: "unique",
          },
        ],
        description: "",
      },
      {
        key: "name",
        type: "string",
        label: "Name",
        readonly: false,
        constraints: [
          {
            type: "unique",
          },
        ],
        description: "",
      },
    ],
    readonly: false,
  },
  {
    name: "States (NetSuite Extract)",
    slug: "customers/States_NetSuite_Extract",
    access: ["*"],
    fields: [
      {
        key: "State",
        type: "string",
        label: "State",
        readonly: false,
        constraints: [
          {
            type: "unique",
          },
        ],
        description: "",
      },
      {
        key: "abbrev.",
        type: "string",
        label: "State Abbreviation",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "Country",
        type: "string",
        label: "Country",
        readonly: false,
        constraints: [],
        description: "",
      },
    ],
    readonly: true,
  },
  {
    name: "Countries (NetSuite Extract)",
    slug: "customers/Countries_NetSuite_Extract",
    access: ["*"],
    fields: [
      {
        key: "Countries",
        type: "string",
        label: "Countries",
        readonly: false,
        constraints: [
          {
            type: "required",
          },
          {
            type: "unique",
          },
        ],
        description: "",
      },
    ],
    readonly: true,
  },
  {
    name: "Chart of Accounts (NetSuite Extract)",
    slug: "customers/Chart_of_Accounts_NetSuite_Extract",
    access: ["*"],
    fields: [
      {
        key: "internalID",
        type: "string",
        label: "Internal ID",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "externalID",
        type: "string",
        label: "External ID",
        readonly: false,
        constraints: [
          {
            type: "unique",
          },
        ],
        description: "",
      },
      {
        key: "Account Number",
        type: "string",
        label: "Account Number",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "Account Name",
        type: "string",
        label: "Account Name",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "parent",
        type: "string",
        label: "Parent",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "Account Type ",
        type: "string",
        label: "Account Type",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "currency",
        type: "reference",
        label: "Currency",
        config: {
          key: "Name",
          ref: "customers/Currency_NetSuite_Extract",
          relationship: "has-many",
        },
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "subsidiary",
        type: "reference",
        label: "Subsidiary",
        config: {
          key: "Name",
          ref: "customers/Subsidiary_NetSuite_Extract",
          relationship: "has-many",
        },
        readonly: false,
        constraints: [
          {
            type: "required",
          },
        ],
        description:
          "This is a reference to the subsidiary which must be created in your account prior to import. Select from the drop down field.",
      },
      {
        key: "includeChildren",
        type: "boolean",
        label: "Include Children",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "isInactive",
        type: "boolean",
        label: "Is Inactive?",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "SummaryAccount",
        type: "boolean",
        label: "Summary Account",
        readonly: false,
        constraints: [],
        description: "",
      },
    ],
    readonly: false,
  },
  {
    name: "Currency (NetSuite Extract)",
    slug: "customers/Currency_NetSuite_Extract",
    access: ["*"],
    fields: [
      {
        key: "Name",
        type: "string",
        label: "Name",
        readonly: false,
        constraints: [
          {
            type: "required",
          },
          {
            type: "unique",
          },
        ],
        description: "",
      },
    ],
    readonly: true,
  },
  {
    name: "Terms (NetSuite Extract)",
    slug: "customers/Terms_NetSuite_Extract",
    access: ["*"],
    fields: [
      {
        key: "description",
        type: "string",
        label: "Description",
        readonly: false,
        constraints: [
          {
            type: "required",
          },
          {
            type: "unique",
          },
        ],
        description: "",
      },
    ],
    readonly: true,
  },
  {
    name: "Win Project Type Values",
    slug: "customers/Win_Project_Type_Values",
    access: ["*"],
    fields: [
      {
        key: "internalID",
        type: "string",
        label: "Internal ID",
        readonly: false,
        constraints: [
          {
            type: "unique",
          },
        ],
        description: "",
      },
      {
        key: "name",
        type: "string",
        label: "Project Type",
        readonly: false,
        constraints: [
          {
            type: "unique",
          },
        ],
        description: "",
      },
    ],
    readonly: false,
  },
  {
    name: "Industry Values",
    slug: "customers/Industry_Values",
    access: ["*"],
    fields: [
      {
        key: "internalID",
        type: "string",
        label: "Internal ID",
        readonly: false,
        constraints: [
          {
            type: "unique",
          },
        ],
        description: "",
      },
      {
        key: "name",
        type: "string",
        label: "Industry Name",
        readonly: false,
        constraints: [
          {
            type: "unique",
          },
        ],
        description: "",
      },
    ],
    readonly: false,
  },
  {
    name: "Department",
    slug: "customers/Department",
    access: ["*"],
    fields: [
      {
        key: "externalid",
        type: "string",
        label: "External ID",
        readonly: false,
        constraints: [
          {
            type: "unique",
          },
        ],
        description: "",
      },
      {
        key: "name",
        type: "string",
        label: "Name",
        readonly: false,
        constraints: [
          {
            type: "required",
          },
          {
            type: "unique",
          },
        ],
        description: "",
      },
      {
        key: "parent",
        type: "string",
        label: "Parent",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "subsidiary",
        type: "reference",
        label: "Subsidiary",
        config: {
          key: "Name",
          ref: "customers/Subsidiary_NetSuite_Extract",
          relationship: "has-many",
        },
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "includeChildren",
        type: "boolean",
        label: "Include Children",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "isinactive",
        type: "boolean",
        label: "Is Inactive",
        readonly: false,
        constraints: [],
        description: "",
      },
    ],
    readonly: true,
  },
  {
    name: "Classes",
    slug: "customers/Classes",
    access: ["*"],
    fields: [
      {
        key: "externalid",
        type: "string",
        label: "External ID",
        readonly: false,
        constraints: [
          {
            type: "unique",
          },
        ],
        description: "",
      },
      {
        key: "name",
        type: "string",
        label: "Name",
        readonly: false,
        constraints: [
          {
            type: "required",
          },
          {
            type: "unique",
          },
        ],
        description: "",
      },
      {
        key: "parent",
        type: "string",
        label: "Parent",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "subsidiary",
        type: "reference",
        label: "Subsidiary",
        config: {
          key: "Name",
          ref: "customers/Subsidiary_NetSuite_Extract",
          relationship: "has-many",
        },
        readonly: false,
        constraints: [
          {
            type: "required",
          },
        ],
        description: "",
      },
      {
        key: "includeChildren",
        type: "boolean",
        label: "Include Children",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "isinactive",
        type: "boolean",
        label: "Is Inactive",
        readonly: false,
        constraints: [],
        description: "",
      },
    ],
    readonly: true,
  },
  {
    name: "Location",
    slug: "customers/Location",
    access: ["*"],
    fields: [
      {
        key: "externalid",
        type: "string",
        label: "External ID",
        readonly: false,
        constraints: [
          {
            type: "unique",
          },
        ],
        description: "",
      },
      {
        key: "name",
        type: "string",
        label: "Name",
        readonly: false,
        constraints: [
          {
            type: "required",
          },
          {
            type: "unique",
          },
        ],
        description: "",
      },
      {
        key: "parent",
        type: "string",
        label: "Parent",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "subsidiary",
        type: "reference",
        label: "Subsidiary",
        config: {
          key: "Name",
          ref: "customers/Subsidiary_NetSuite_Extract",
          relationship: "has-many",
        },
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "includeChildren",
        type: "boolean",
        label: "Include Children",
        readonly: false,
        constraints: [],
        description: "",
      },
      {
        key: "Address_country",
        type: "reference",
        label: "Address Country",
        config: {
          key: "Countries",
          ref: "customers/Countries_NetSuite_Extract",
          relationship: "has-one",
        },
        readonly: false,
        constraints: [],
        description: "",
      },
    ],
    readonly: true,
  }
];
