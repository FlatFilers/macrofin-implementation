export const blueprintOpenAP = [
    {
        name: "Open AP Template",
        slug: "open_ap/Open_AP_Template",
        access: ["*"],
        fields: [
          {
            key: "tranId",
            type: "string",
            label: "Tran Id",
            readonly: false,
            constraints: [
              {
                type: "required",
              },
              {
                type: "unique",
              },
            ],
            description: "Enter Invoice number. This field should be unique.",
          },
          {
            key: "company_name",
            type: "reference",
            label: "Company Name",
            config: {
              key: "companyName",
              ref: "open_ap/Vendor",
              relationship: "has-many",
            },
            readonly: false,
            constraints: [
              {
                type: "required",
              },
            ],
            description:
              "This is a reference to the company name of the record that must exist in your account prior to import.",
          },
          {
            key: "subsidiary",
            type: "reference",
            label: "Subsidiary",
            config: {
              key: "Name",
              ref: "open_ap/Subsidiary_NetSuite_Extract",
              relationship: "has-many",
            },
            readonly: false,
            constraints: [
              {
                type: "required",
              },
            ],
            description:
              "This is a reference to the subsidiary of the record that match the selected subsidiary on the entity record.",
          },
          {
            key: "currency",
            type: "reference",
            label: "Currency",
            config: {
              key: "Name",
              ref: "open_ap/Currency_NetSuite_Extract",
              relationship: "has-many",
            },
            readonly: false,
            constraints: [
              {
                type: "required",
              },
            ],
            description:
              "This is a reference to a currency that must exist in your account prior to import. The currency used must match the currency selected on the customer’s record.",
          },
          {
            key: "exchangeRate",
            type: "number",
            label: "Exchange Rate",
            readonly: false,
            constraints: [],
            description:
              "Enter the currency exchange rate as of cutover date for the transaction.  Ask your lead consultant for details.",
          },
          {
            key: "postingPeriod",
            type: "string",
            label: "Posting Period",
            readonly: false,
            constraints: [],
            description:
              "This is the cutover period.  Formula driven. Do not override.",
          },
          {
            key: "tranDate",
            type: "string",
            label: "Tran Date",
            readonly: false,
            constraints: [
              {
                type: "required",
              },
            ],
            description: "Enter the original invoice date.",
          },
          {
            key: "dueDate",
            type: "string",
            label: "Due Date",
            readonly: false,
            constraints: [],
            description: "Enter the due date of the invoice.",
          },
          {
            key: "referenceno",
            type: "string",
            label: "Reference No",
            readonly: false,
            constraints: [],
            description: "Enter PO/reference number.",
          },
          {
            key: "memo",
            type: "string",
            label: "Memo",
            readonly: false,
            constraints: [],
            description:
              "You can retain the default memo driven by the formula or enter the actual description of the invoice. ",
          },
          {
            key: "itemLine_Item",
            type: "string",
            label: "Item Line Item",
            readonly: false,
            constraints: [],
            description:
              "This is the dummy item to be used in importing the open transactions.  Formula driven. Do not override.",
          },
          {
            key: "itemLine_description",
            type: "string",
            label: "Item Line Description",
            readonly: false,
            constraints: [],
            description:
              "You can retain the default memo driven by the formula or enter the actual description of the invoice. ",
          },
          {
            key: "itemLine_Quantity",
            type: "number",
            label: "Item Line Quantity",
            readonly: false,
            constraints: [
              {
                type: "required",
              },
            ],
            description: "Enter item Quantity",
          },
          {
            key: "itemLine_Rate",
            type: "number",
            label: "Item Line Rate",
            readonly: false,
            constraints: [
              {
                type: "required",
              },
            ],
            description: "Enter the rate for the item (price per quantity).",
          },
          {
            key: "Transaction_Amount",
            type: "number",
            label: "Transaction Amount",
            readonly: false,
            constraints: [],
            description:
              "This is the column is calculated by multiplying the rate to the quantity.  Formula driven do not override.",
          },
          {
            key: "Base_Currency_Amount",
            type: "number",
            label: "Base Currency Amount",
            readonly: false,
            constraints: [],
            description:
              "This is the column is calculated by multiplying the Transaction Amount to the Exchange Rate to calculate the amount that is going to be posted to the general ledger.  Formula driven. Do not override.",
          },
          {
            key: "itemLine_department",
            type: "string",
            label: "Item Line Department",
            readonly: false,
            constraints: [],
            description:
              "This should be the #N/A value of the segment.  Formula driven. Do not override.",
          },
          {
            key: "itemLine_class",
            type: "string",
            label: "Item Line Class",
            readonly: false,
            constraints: [],
            description:
              "This should be the #N/A value of the segment.  Formula driven. Do not override.",
          },
          {
            key: "itemLine_location",
            type: "string",
            label: "Item Line Location",
            readonly: false,
            constraints: [],
            description:
              "This should be the #N/A value of the segment.  Formula driven. Do not override.",
          },
        ],
        readonly: false,
      },
      {
        name: "Vendor",
        slug: "open_ap/Vendor",
        access: ["*"],
        fields: [
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
            description:
              "This is the Unique backend Identifier for a Vendor Record. Should be Unique for all the Vendor Records. This can be used to create a Parent-Child Relationship and to link other record sets with these Vendors.",
          },
          {
            key: "entityid",
            type: "string",
            label: "Vendor ID",
            readonly: false,
            constraints: [
              {
                type: "unique",
              },
            ],
            description:
              "This is the Front-End Vendor ID. Should be unique for all the Vendors. This field is not required if you use Auto-Generated Numbers.",
          },
          {
            key: "isPerson",
            type: "boolean",
            label: "Is Person",
            readonly: false,
            constraints: [],
            description:
              "Choose the type of Vendor record you are creating by selecting an Individual.  If set to TRUE, the First Name and Last Name will be a mandatory field to populate.",
          },
          {
            key: "companyName",
            type: "string",
            label: "Company Name",
            readonly: false,
            constraints: [],
            description: "Enter the Vendor's company name.",
          },
          {
            key: "firstName",
            type: "string",
            label: "First Name",
            readonly: false,
            constraints: [],
            description:
              "Required field if the Vendor is an Individual. Leave blank for Companies.",
          },
          {
            key: "lastName",
            type: "string",
            label: "Last Name",
            readonly: false,
            constraints: [],
            description:
              "Required field if the Vendor is an Individual. Leave blank for Companies.",
          },
          {
            key: "subsidiary",
            type: "reference",
            label: "Subsidiary",
            config: {
              key: "Name",
              ref: "open_ap/Subsidiary_NetSuite_Extract",
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
            key: "email",
            type: "string",
            label: "Email",
            readonly: false,
            constraints: [],
            description:
              "This field should contain the main E-mail Address of the Vendor.  The Information entered for this field must conform to the standard e-mail Address format. i.e.user@domain.com",
          },
          {
            key: "email_payment_notif",
            type: "string",
            label: "Email Payment Notif",
            readonly: false,
            constraints: [],
            description:
              "This field should contain the main E-mail Address of the Vendor that will receive the remittance advice for electronic payments.  For multiple e-mail addresses, use a semi-colon (;) as a delimiter (ie., jeleny.oral@macorfin.co.uk;consultant@macrofin.co.uk).  The Information entered for this field must conform to the standard e-mail Address format. i.e.user@domain.com",
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
            key: "currency",
            type: "reference",
            label: "Currency",
            config: {
              key: "Name",
              ref: "open_ap/Currency_NetSuite_Extract",
              relationship: "has-many",
            },
            readonly: false,
            constraints: [],
            description:
              "This is mandatory if you use Multiple Currencies.   It is a reference to a currency record that must exist in Lists > Accounting > Currencies prior to importing.",
          },
          {
            key: "terms",
            type: "reference",
            label: "Terms",
            config: {
              key: "name",
              ref: "open_ap/Payment_Term_NetSuite_Extract",
              relationship: "has-many",
            },
            readonly: false,
            constraints: [],
            description:
              "This field should have the  reference to default terms that you have with this Vendor.   These records must exist in Setup > Accounting > Accounting Lists > Terms prior to importing.",
          },
          {
            key: "address1_Label",
            type: "string",
            label: "Address1 Label",
            readonly: false,
            constraints: [],
            description:
              "It maps to the Label of an Address and indicates the beginning of an individual Address.   The Label must be unique for all the different Addresses for this Vendor.",
          },
          {
            key: "Address_Attention",
            type: "string",
            label: "Address Attention",
            readonly: false,
            constraints: [],
            description: "Enter the name of the Individual in this field.",
          },
          {
            key: "Address1_Addressee",
            type: "string",
            label: "Address1 Addressee",
            readonly: false,
            constraints: [],
            description: "Enter the Addressee or the Company Name here.",
          },
          {
            key: "Address1_phone",
            type: "string",
            label: "Address1 Phone",
            readonly: false,
            constraints: [],
            description: "Enter a phone number for your Vendor. ",
          },
          {
            key: "Address1_line1",
            type: "string",
            label: "Address1 Line1",
            readonly: false,
            constraints: [],
            description: "Enter the Address Line 1 in this field.",
          },
          {
            key: "address1_line2",
            type: "string",
            label: "Address1 Line2",
            readonly: false,
            constraints: [],
            description: "Enter the Address Line 2 in this field.",
          },
          {
            key: "Address1_City",
            type: "string",
            label: "Address1 City",
            readonly: false,
            constraints: [],
            description: "Enter the City of the Address in this field.",
          },
          {
            key: "address1_state",
            type: "reference",
            label: "Address1 State",
            config: {
              key: "State",
              ref: "open_ap/States_NetSuite_Extract",
              relationship: "has-many",
            },
            readonly: false,
            constraints: [],
            description:
              "Enter the State in this field. You may enter the standard abbreviation or the full state or province name.",
          },
          {
            key: "Address1_zipCode",
            type: "string",
            label: "Address1 Zip Code",
            readonly: false,
            constraints: [],
            description: "Enter the Zip Code of the Address in this field.",
          },
          {
            key: "Address1_Country",
            type: "reference",
            label: "Address1 Country",
            config: {
              key: "Countries",
              ref: "open_ap/Countries_NetSuite_Extract",
              relationship: "has-many",
            },
            readonly: false,
            constraints: [],
            description:
              "This is the Reference to the Country of this Address. It must match the List of the Countries in NetSuite.",
          },
          {
            key: "Address1_defaultBilling",
            type: "boolean",
            label: "Address1 Default Billing",
            readonly: false,
            constraints: [],
            description:
              "If this Address is to be marked as a Default Billing Address, please put TRUE.   Otherwise, enter FALSE if this is NOT a Default Billing Address.",
          },
          {
            key: "Address1_defaultShipping",
            type: "boolean",
            label: "Address1 Default Shipping",
            readonly: false,
            constraints: [],
            description:
              "If this Address is to be marked as a Default Shipping Address, please put TRUE.   Otherwise, enter FALSE if this is it NOT a Default Shipping Address.",
          },
          {
            key: "emailtransactions",
            type: "boolean",
            label: "Email Transactions",
            readonly: false,
            constraints: [],
            description:
              "If marked as TRUE, new transactions created for the Vendor will automatically gets sent out to the third party. Make sure to set this to FALSE for the initial import. If required to be enabled, Vendor lists needs to be updated after cutover.",
          },
          {
            key: "category",
            type: "reference",
            label: "Category",
            config: {
              key: "name",
              ref: "open_ap/Vendor_Category_NetSuite_Extract",
              relationship: "has-many",
            },
            readonly: false,
            constraints: [],
            description:
              "Provide the Category reference for this Vendor.   It must exist in Setup > Accounting > Accounting Lists > New > Vendor Category prior to importing.",
          },
          {
            key: "isInactive",
            type: "boolean",
            label: "Is Inactive",
            readonly: false,
            constraints: [],
            description:
              "This is used to mark the Vendor as Inactive at the time of Import",
          },
          {
            key: "payablesAccount",
            type: "reference",
            label: "Payables Account",
            config: {
              key: "Account Name",
              ref: "open_ap/Chart_of_Accounts_NetSuite_Extract",
              relationship: "has-many",
            },
            readonly: false,
            constraints: [],
            description: "",
          },
          {
            key: "priceLevel",
            type: "reference",
            label: "Price Level",
            config: {
              key: "name",
              ref: "open_ap/Price_Level_NetSuite_Extract",
              relationship: "has-many",
            },
            readonly: false,
            constraints: [],
            description:
              "This is a reference to a default price level at which you sell your items to this Vendor.   The Price Levels must exist in Setup > Accounting > Accounting List > Price Level prior to importing.",
          },
          {
            key: "creditLimit",
            type: "number",
            label: "Credit Limit",
            readonly: false,
            constraints: [],
            description:
              "This is the Credit Limit you would want to set for the Sales transactions with this Vendor.",
          },
          {
            key: "taxItem",
            type: "reference",
            label: "Tax Item",
            config: {
              key: "name",
              ref: "open_ap/Tax_Item_NetSuite_Extract",
              relationship: "has-many",
            },
            readonly: false,
            constraints: [],
            description:
              "This is a reference to a default Sales tax item that applies to this Vendor.   The Sales Tax item must exist in Setup > Accounting > Tax Codes prior to importing.",
          },
          {
            key: "taxItemInternalId",
            type: "string",
            label: "Tax Item Internal ID",
            readonly: true,
            constraints: [
              {
                type: "computed",
              },
            ],
            description: "",
          },
          {
            key: "vatregnumber",
            type: "string",
            label: "Vendor's tax registration number",
            readonly: false,
            constraints: [],
            description: "Enter this Vendor's tax registration number.",
          },
          {
            key: "additionalCurrencies",
            type: "reference",
            label: "Additional Currencies",
            config: {
              key: "Name",
              ref: "open_ap/Currency_NetSuite_Extract",
              relationship: "has-many",
            },
            readonly: false,
            constraints: [],
            description:
              "Add additional currencies outside of the primary currency that the Vendor uses.",
          },
          {
            key: "Address2_attention",
            type: "string",
            label: "Address2 Attention",
            readonly: false,
            constraints: [],
            description: "Enter the name of the Individual in this field.",
          },
          {
            key: "Address2_Addressee",
            type: "string",
            label: "Address2 Addressee",
            readonly: false,
            constraints: [],
            description: "Enter the Addressee or the Company Name here.",
          },
          {
            key: "Address2_phone",
            type: "string",
            label: "Address2 Phone",
            readonly: false,
            constraints: [],
            description: "Enter a phone number for your Vendor.",
          },
          {
            key: "Address2_line1",
            type: "string",
            label: "Address2 Line1",
            readonly: false,
            constraints: [],
            description: "Enter the Address Line 1 in this field.",
          },
          {
            key: "Address2_line2",
            type: "string",
            label: "Address2 Line2",
            readonly: false,
            constraints: [],
            description: "Enter the Address Line 2 in this field.",
          },
          {
            key: "Address2_city",
            type: "string",
            label: "Address2 City",
            readonly: false,
            constraints: [],
            description: "Enter the City of the Address in this field.",
          },
          {
            key: "Address2_state",
            type: "reference",
            label: "Address2 State",
            config: {
              key: "State",
              ref: "open_ap/States_NetSuite_Extract",
              relationship: "has-many",
            },
            readonly: false,
            constraints: [],
            description:
              "Enter the State in this field. You may enter the standard abbreviation or the full state or province name.",
          },
          {
            key: "Address2_zipCode",
            type: "string",
            label: "Address2 Zip Code",
            readonly: false,
            constraints: [],
            description: "Enter the Zip Code of the Address in this field.",
          },
          {
            key: "Address2_country",
            type: "reference",
            label: "Address2 Country",
            config: {
              key: "Countries",
              ref: "open_ap/Countries_NetSuite_Extract",
              relationship: "has-many",
            },
            readonly: false,
            constraints: [],
            description:
              "This is the Reference to the Country of this Address. It must match the List of the Countries in NetSuite.",
          },
          {
            key: "Address2_defaultBilling",
            type: "boolean",
            label: "Address2 Default Billing",
            readonly: false,
            constraints: [],
            description:
              "If this Address is to be marked as a Default Billing Address, please put TRUE.   Otherwise, enter FALSE if this is NOT a Default Billing Address.",
          },
          {
            key: "Address2_defaultShipping",
            type: "boolean",
            label: "Address2 Default Shipping",
            readonly: false,
            constraints: [],
            description:
              "If this Address is to be marked as a Default Shipping Address, please put TRUE.   Otherwise, enter FALSE if this is it NOT a Default Shipping Address.",
          },
        ],
        readonly: false,
      },
      {
        name: "Subsidiary (NetSuite Extract)",
        slug: "open_ap/Subsidiary_NetSuite_Extract",
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
              ref: "open_ap/Currency_NetSuite_Extract",
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
        name: "Currency (NetSuite Extract)",
        slug: "open_ap/Currency_NetSuite_Extract",
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
        name: "Payment Term (NetSuite Extract)",
        slug: "open_ap/Payment_Term_NetSuite_Extract",
        access: ["*"],
        fields: [
          {
            key: "internalId",
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
          {
            key: "daysUntilNetDue",
            type: "number",
            label: "Days Until Net Due",
            readonly: false,
            constraints: [],
            description: "",
          },
        ],
        readonly: false,
      },
      {
        name: "States (NetSuite Extract)",
        slug: "open_ap/States_NetSuite_Extract",
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
        slug: "open_ap/Countries_NetSuite_Extract",
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
        name: "Vendor Category (NetSuite Extract)",
        slug: "open_ap/Vendor_Category_NetSuite_Extract",
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
        name: "Chart of Accounts (NetSuite Extract)",
        slug: "open_ap/Chart_of_Accounts_NetSuite_Extract",
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
              ref: "open_ap/Currency_NetSuite_Extract",
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
              ref: "open_ap/Subsidiary_NetSuite_Extract",
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
        name: "Price Level (NetSuite Extract)",
        slug: "open_ap/Price_Level_NetSuite_Extract",
        access: ["*"],
        fields: [
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
        name: "Tax Item (NetSuite Extract)",
        slug: "open_ap/Tax_Item_NetSuite_Extract",
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
          {
            key: "vatRate",
            type: "string",
            label: "VAT Rate",
            readonly: false,
            constraints: [],
            description: "",
          },
          {
            key: "country",
            type: "reference",
            label: "Country",
            config: {
              key: "Countries",
              ref: "open_ap/Countries_NetSuite_Extract",
              relationship: "has-many",
            },
            readonly: false,
            constraints: [],
            description: "",
          },
        ],
        readonly: false,
      }
];