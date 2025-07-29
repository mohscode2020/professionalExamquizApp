import { Quiz } from '../types';

export const quizzes: Quiz[] = [
  {
    id: 'powerbi-visualization',
    title: 'Prepare the Data',
    description: 'Connecting to data sources, cleaning data, transforming and loading using Power Query',
    timePerQuestion: 30,
    questions: [
      {
      "id": 1,
      "question": "What is the primary benefit of query folding?",
      "options": ["Reduces visual load time", "Increases model size", "Pushes transformations to the data source", "Automatically adds indexes"],
      "correctAnswer": 2,
      "explanation": "Query folding improves performance by pushing transformations to the source system."
    },
    {
      "id": 2,
      "question": "You want to stack rows from multiple tables. Which transformation do you use?",
      "options": ["Merge Queries", "Append Queries", "Group By", "Combine Files"],
      "correctAnswer": 1,
      "explanation": "Append queries combine rows from two or more tables."
    },
    {
      "id": 3,
      "question": "What happens when a column has null values in Power Query?",
      "options": ["The row is deleted", "The query fails", "The value is treated as missing", "It is replaced by zero"],
      "correctAnswer": 2,
      "explanation": "Nulls indicate missing or undefined values."
    },
    {
      "id": 4,
      "question": "Which of the following can be created in Power Query to allow user inputs?",
      "options": ["Hierarchies", "Parameters", "Measures", "Bookmarks"],
      "correctAnswer": 1,
      "explanation": "Parameters enable dynamic filtering or logic."
    },
    {
      "id": 5,
      "question": "What does the Combine Files option do?",
      "options": ["Merges multiple columns into one", "Imports multiple Excel sheets", "Appends queries", "Combines files from a folder into a single table"],
      "correctAnswer": 3,
      "explanation": "Combine Files consolidates multiple files from a folder into a single table."
    },
    {
      "id": 6,
      "question": "You want to filter rows before loading the table. Where should you apply the filter?",
      "options": ["After loading the model", "Inside the Power BI visual", "In the Power Query Editor", "In DAX"],
      "correctAnswer": 2,
      "explanation": "Filtering in Power Query reduces the dataset before it loads into the model."
    },
    {
      "id": 7,
      "question": "What does profiling help you do?",
      "options": ["Create visuals", "Summarize report data", "Analyze column quality and distribution", "Create calculated columns"],
      "correctAnswer": 2,
      "explanation": "Profiling provides information about column quality, distinct values, and distribution."
    },
    {
      "id": 8,
      "question": "The Merge Queries operation in Power Query is equivalent to what database concept?",
      "options": ["Append", "Union", "Join", "Projection"],
      "correctAnswer": 2,
      "explanation": "Merge Queries performs a join operation similar to relational databases."
    },
    {
      "id": 9,
      "question": "Which M language function replaces values in a column?",
      "options": ["Table.RemoveColumns", "Table.ReplaceValue", "Table.SelectRows", "Table.Group"],
      "correctAnswer": 1,
      "explanation": "Table.ReplaceValue is used to replace specified values in a column."
    },
    {
      "id": 10,
      "question": "To import Excel files from a folder, what Power Query option is used?",
      "options": ["Append Queries", "Combine Files", "Merge Queries", "Load to Data Model"],
      "correctAnswer": 1,
      "explanation": "Combine Files allows importing multiple Excel files from a folder."
    },
    {
      "id": 11,
      "question": "Which transformation removes unnecessary columns in Power Query?",
      "options": ["Remove Rows", "Choose Columns", "Table.Buffer", "Filter Rows"],
      "correctAnswer": 1,
      "explanation": "Choose Columns lets you select only the necessary columns and remove others."
    },
    {
      "id": 12,
      "question": "Which Power Query option lets you repeat a set of steps with different inputs?",
      "options": ["Custom Column", "Parameter", "Function", "Applied Step"],
      "correctAnswer": 2,
      "explanation": "Functions in Power Query allow you to reuse transformation logic with different inputs."
    },
    {
      "id": 13,
      "question": "A column has inconsistent data types. What should you do?",
      "options": ["Use query folding", "Replace values", "Change data type", "Remove nulls"],
      "correctAnswer": 2,
      "explanation": "Changing the data type ensures consistency for calculations and analysis."
    },
    {
      "id": 14,
      "question": "What does 'Enable Load' in Power Query mean?",
      "options": ["Makes the query visible in reports", "Deletes the table", "Refreshes the dataset", "Enables gateway connections"],
      "correctAnswer": 0,
      "explanation": "Enable Load determines whether the query is loaded into the data model for use in reports."
    },
    {
      "id": 15,
      "question": "What Power Query step detects column types?",
      "options": ["Detect Data Type", "Change Column Type", "Promote Headers", "Remove Top Rows"],
      "correctAnswer": 0,
      "explanation": "Detect Data Type automatically assigns data types based on column values."
    },
    {
      "id": 16,
      "question": "What transformation replaces errors with a default value?",
      "options": ["Replace Errors", "Replace Value", "Try-Otherwise", "Remove Errors"],
      "correctAnswer": 0,
      "explanation": "Replace Errors is used to substitute error values with a default value."
    },
    {
      "id": 17,
      "question": "You have multiple queries that you want to load but not display in the report. What should you do?",
      "options": ["Use ‘Close & Load’", "Use DAX", "Disable Load", "Use Import Mode"],
      "correctAnswer": 2,
      "explanation": "Disabling Load keeps the table in the model but hides it from report view."
    },
    {
      "id": 18,
      "question": "What Power Query option lets you rename columns easily?",
      "options": ["Rename Table", "Change Header", "Rename Columns", "Promote Headers"],
      "correctAnswer": 2,
      "explanation": "Rename Columns is specifically used to rename one or multiple columns."
    },
    {
      "id": 19,
      "question": "You need to apply multiple filters in Power Query. What should you use?",
      "options": ["Conditional Column", "Advanced Filter", "Table.SelectRows with AND/OR logic", "Group By"],
      "correctAnswer": 2,
      "explanation": "Table.SelectRows supports advanced filtering using AND/OR conditions."
    },
    {
      "id": 20,
      "question": "Which operation allows you to join two tables based on a key in Power Query?",
      "options": ["Merge Queries", "Append Queries", "Group By", "Combine Files"],
      "correctAnswer": 0,
      "explanation": "Merge Queries allows joining tables based on a matching key column."
    }
    ]
  },
  {
    id: 'dax-expressions',
    title: 'Model the Data',
    description: 'Designing data models, configuring relationships, creating measures using DAX',
    timePerQuestion: 45,
    questions: [
      {
      "id": 1,
      "question": "What is the primary benefit of a star schema in a Power BI model?",
      "options": ["It simplifies data refresh", "It minimizes the number of visuals", "It improves performance and simplifies relationships", "It reduces file size by using snowflake joins"],
      "correctAnswer": 2,
      "explanation": "Star schemas use denormalized dimension tables and improve performance and usability in data models."
    },
    {
      "id": 2,
      "question": "Which DAX function can force the use of an inactive relationship?",
      "options": ["SELECTEDVALUE()", "USERELATIONSHIP()", "RELATED()", "SWITCH()"],
      "correctAnswer": 1,
      "explanation": "USERELATIONSHIP activates an inactive relationship inside a measure expression."
    },
    {
      "id": 3,
      "question": "You need to calculate total sales per product filtered by a region. Which function is most appropriate?",
      "options": ["SUM()", "RANKX()", "CALCULATE()", "CONCATENATE()"],
      "correctAnswer": 2,
      "explanation": "CALCULATE applies additional filters to a measure or expression."
    },
    {
      "id": 4,
      "question": "Which of the following can you create in Power BI to organize fields into logical groups for reporting?",
      "options": ["Hierarchies", "Calculated columns", "Datasets", "Groups"],
      "correctAnswer": 0,
      "explanation": "Hierarchies allow logical grouping of fields for easier navigation and drill-down in reports."
    },
    {
      "id": 5,
      "question": "A relationship with high cardinality can impact model performance by:",
      "options": ["Reducing DAX query time", "Increasing data refresh", "Increasing memory usage", "Disabling filtering"],
      "correctAnswer": 2,
      "explanation": "High cardinality relationships require more memory and processing power, impacting model performance."
    },
    {
      "id": 6,
      "question": "Which DAX function allows you to access the value of a column from a related table?",
      "options": ["VALUES()", "RELATED()", "RANKX()", "LOOKUPVALUE()"],
      "correctAnswer": 1,
      "explanation": "RELATED retrieves a value from a column in a related table."
    },
    {
      "id": 7,
      "question": "You create a calculated column that duplicates a field from a related table. What is a better option for performance?",
      "options": ["Use a DAX measure", "Keep the column", "Use RELATEDTABLE", "Use a relationship and retrieve it dynamically"],
      "correctAnswer": 3,
      "explanation": "Using relationships and retrieving the field dynamically avoids unnecessary storage of duplicate data."
    },
    {
      "id": 8,
      "question": "What does the Performance Analyzer tool help you measure?",
      "options": ["RAM usage", "Power Query loading speed", "Visual and DAX query performance", "Gateway refresh logs"],
      "correctAnswer": 2,
      "explanation": "Performance Analyzer measures visual rendering and DAX query execution times."
    },
    {
      "id": 9,
      "question": "What type of filter behavior allows both tables in a relationship to filter each other?",
      "options": ["Unidirectional", "Bidirectional", "Cross-highlighting", "Dynamic filtering"],
      "correctAnswer": 1,
      "explanation": "Bidirectional relationships enable both tables to filter each other."
    },
    {
      "id": 10,
      "question": "When should you use a calculated column instead of a measure?",
      "options": ["For aggregate calculations", "When values are dynamic", "When creating filters or slicers", "When using DAX variables"],
      "correctAnswer": 2,
      "explanation": "Calculated columns are needed when the value must exist in the table for filtering or slicing."
    },
    {
      "id": 11,
      "question": "Which function returns the rank of a value in a column based on a DAX expression?",
      "options": ["RANKX()", "ORDERBY()", "CALCULATE()", "TOPN()"],
      "correctAnswer": 0,
      "explanation": "RANKX assigns a rank to each value based on the specified expression."
    },
    {
      "id": 12,
      "question": "What is the difference between SUM() and SUMX()?",
      "options": ["SUM is faster and can use filters", "SUMX is for iterative row-by-row calculations", "SUM aggregates grouped data only", "SUMX works only with related tables"],
      "correctAnswer": 1,
      "explanation": "SUMX performs row-by-row iteration over a table, whereas SUM simply aggregates a column."
    },
    {
      "id": 13,
      "question": "A measure uses:",
      "options": ["Row context", "Filter context", "Table context only", "Relationship context"],
      "correctAnswer": 1,
      "explanation": "Measures are calculated in filter context, meaning they depend on applied filters and slicers."
    },
    {
      "id": 14,
      "question": "What is the role of SELECTEDVALUE() in DAX?",
      "options": ["Create visuals", "Get the selected value in slicers or filters", "Add a new column", "Remove filters from a table"],
      "correctAnswer": 1,
      "explanation": "SELECTEDVALUE returns the currently selected value in a column, often used with slicers."
    },
    {
      "id": 15,
      "question": "Which DAX function can be used to avoid divide-by-zero errors?",
      "options": ["DIVIDE()", "/ operator", "IFERROR()", "ERROR()"],
      "correctAnswer": 0,
      "explanation": "DIVIDE safely handles division and returns an alternate result when the denominator is zero."
    },
    {
      "id": 16,
      "question": "What does cardinality describe in a data model relationship?",
      "options": ["The direction of filtering", "The uniqueness of values in each table’s column", "The column name", "Whether a table is visible"],
      "correctAnswer": 1,
      "explanation": "Cardinality describes how unique or repeated the values are in the related columns of the relationship."
    },
    {
      "id": 17,
      "question": "Which of the following is true about calculated columns?",
      "options": ["They are computed at query time", "They reduce memory usage", "They increase file size and are calculated when data is loaded", "They can only be used in measures"],
      "correctAnswer": 2,
      "explanation": "Calculated columns increase model size and are computed during data load, not query time."
    },
    {
      "id": 18,
      "question": "A calculated table is best used when:",
      "options": ["You need interactive filtering", "You need reusable data generated using DAX", "You want to reduce data model size", "You want to create tooltip fields"],
      "correctAnswer": 1,
      "explanation": "Calculated tables generate new tables using DAX expressions for reuse in the data model."
    },
    {
      "id": 19,
      "question": "In DAX, what does the VAR keyword allow you to do?",
      "options": ["Visualize a field", "Define a temporary variable in a formula", "Create relationships", "Change visual formatting"],
      "correctAnswer": 1,
      "explanation": "VAR lets you store an intermediate value in a measure or calculation for reuse later."
    },
    {
      "id": 20,
      "question": "What is the benefit of modeling your data in a star schema?",
      "options": ["Enables many-to-many relationships", "Improves query performance and simplifies relationships", "Enables relationship detection", "Automatically creates DAX columns"],
      "correctAnswer": 1,
      "explanation": "Star schemas simplify relationships and improve query performance in Power BI."
    }
    ]
  },
   {
    id: 'powerbi-visualization',
    title: 'Visualize and Analyze the Data',
    description: 'Creating reports, choosing visuals, using bookmarks and filters.',
    timePerQuestion: 30,
    questions: [
   {
      "id": 1,
      "question": "You want to show a single, large KPI number on a report. Which visual should you use?",
      "options": ["Card", "Matrix", "Table", "Tree Map"],
      "correctAnswer": 0,
      "explanation": "A Card visual displays a single data point, ideal for KPIs like total revenue."
    },
    {
      "id": 2,
      "question": "Which visual is best suited to show the breakdown of total values by category and subcategory?",
      "options": ["Line chart", "Tree map", "KPI", "Gauge"],
      "correctAnswer": 1,
      "explanation": "Tree maps are great for showing hierarchical data in a compact form."
    },
    {
      "id": 3,
      "question": "What feature lets users navigate to a new page showing filtered data for a selected item?",
      "options": ["Drill-through", "Drill-down", "Bookmark", "Page Tooltip"],
      "correctAnswer": 0,
      "explanation": "Drill-through allows users to right-click a data point and view related filtered data on another page."
    },
    {
      "id": 4,
      "question": "What is the difference between drill-down and drill-through?",
      "options": ["Drill-through is within one visual; drill-down navigates to other pages", "Drill-down stays in the visual; drill-through jumps to a different report page", "Drill-through requires slicers; drill-down does not", "Drill-down is only in Power Query"],
      "correctAnswer": 1,
      "explanation": "Drill-down allows detailed exploration within the same visual, while drill-through navigates to another page with filtered data."
    },
    {
      "id": 5,
      "question": "Which technique lets you maintain consistent filter selections across multiple report pages?",
      "options": ["Bookmarks", "Drill-through", "Sync slicers", "Page navigation"],
      "correctAnswer": 2,
      "explanation": "Sync slicers maintain filter selections across pages to ensure consistent filtering."
    },
    {
      "id": 6,
      "question": "You want a visual to update when another visual is clicked. What is this called?",
      "options": ["Data linking", "Cross-filtering", "Tooltip interaction", "Slicer sync"],
      "correctAnswer": 1,
      "explanation": "Cross-filtering occurs when one visual affects another based on user interaction."
    },
    {
      "id": 7,
      "question": "What is the main difference between cross-filtering and cross-highlighting?",
      "options": ["Cross-filtering updates all visuals; cross-highlighting only updates filters", "Cross-highlighting fades out unselected data; cross-filtering filters visuals", "Cross-filtering works in Excel only", "Cross-highlighting is for slicers only"],
      "correctAnswer": 1,
      "explanation": "Cross-highlighting dims unrelated data while keeping it visible, whereas cross-filtering completely filters visuals."
    },
    {
      "id": 8,
      "question": "What visual best shows values flowing from a beginning to end balance, like profit?",
      "options": ["KPI", "Line chart", "Waterfall", "Gauge"],
      "correctAnswer": 2,
      "explanation": "Waterfall charts visualize how values change step by step, ideal for profit and balance analysis."
    },
    {
      "id": 9,
      "question": "To make your reports accessible to screen readers, you should always:",
      "options": ["Use tooltips", "Use bookmarks", "Add alt text and adjust tab order", "Use Q&A visual"],
      "correctAnswer": 2,
      "explanation": "Adding alt text and defining tab order ensures accessibility for screen reader users."
    },
    {
      "id": 10,
      "question": "What is the function of the Q&A visual in Power BI?",
      "options": ["Creates filters using natural language", "Allows navigation", "Adds a custom tooltip", "Runs SQL commands"],
      "correctAnswer": 0,
      "explanation": "The Q&A visual lets users ask natural language questions and get instant visuals as answers."
    },
    {
      "id": 11,
      "question": "A user asks, 'Show me total sales by product.' Which Power BI feature handles this?",
      "options": ["Matrix visual", "Q&A visual", "DAX measure", "Drill-through"],
      "correctAnswer": 1,
      "explanation": "The Q&A visual interprets natural language queries and returns a visual result automatically."
    },
    {
      "id": 12,
      "question": "What is the purpose of bookmarks in Power BI?",
      "options": ["Filter visual data", "Save a specific page in browser", "Capture a report state (visuals, filters) for navigation or storytelling", "Save DAX queries"],
      "correctAnswer": 2,
      "explanation": "Bookmarks store the current state of a report, useful for navigation, presentations, and storytelling."
    },
    {
      "id": 13,
      "question": "What is the function of conditional formatting in visuals?",
      "options": ["Applies DAX to measure values", "Visually indicates data patterns using colors or icons", "Automatically creates tooltips", "Filters rows in a table"],
      "correctAnswer": 1,
      "explanation": "Conditional formatting applies color scales, data bars, or icons to highlight patterns in data."
    },
    {
      "id": 14,
      "question": "You want to create a custom visual not included by default. Where do you get it from?",
      "options": ["Visualizations pane", "DAX Studio", "Power Query Editor", "AppSource Marketplace"],
      "correctAnswer": 3,
      "explanation": "AppSource Marketplace provides certified custom visuals that can be added to Power BI reports."
    },
    {
      "id": 15,
      "question": "You want users to hover over a visual and see additional info. What should you use?",
      "options": ["Bookmarks", "Tooltips", "Sync slicers", "Filters"],
      "correctAnswer": 1,
      "explanation": "Tooltips display extra information about data points when users hover over visuals."
    },
    {
      "id": 16,
      "question": "You want to allow users to filter multiple visuals at once using a dropdown. Which visual do you add?",
      "options": ["Card", "Slicer", "KPI", "Table"],
      "correctAnswer": 1,
      "explanation": "A slicer provides an interactive way to filter multiple visuals simultaneously."
    },
    {
      "id": 17,
      "question": "What visual is best when you want to compare values across categories?",
      "options": ["Line chart", "Card", "Bar or Column chart", "Tree Map"],
      "correctAnswer": 2,
      "explanation": "Bar or Column charts are ideal for comparing values across discrete categories."
    },
    {
      "id": 18,
      "question": "Which visual allows you to display data with row and column headers like a pivot table?",
      "options": ["KPI", "Table", "Matrix", "Waterfall"],
      "correctAnswer": 2,
      "explanation": "Matrix visuals provide both row and column groupings, similar to pivot tables in Excel."
    },
    {
      "id": 19,
      "question": "What accessibility feature allows keyboard users to move through visual elements?",
      "options": ["Sync slicers", "Drill-through", "Tab order", "Q&A"],
      "correctAnswer": 2,
      "explanation": "Tab order allows keyboard navigation through report elements for accessibility compliance."
    },
    {
      "id": 20,
      "question": "Which technique should be used to create an interactive report summary page with navigation buttons?",
      "options": ["Bookmarks and selection pane", "DAX measures", "Calculated tables", "Drill-down"],
      "correctAnswer": 0,
      "explanation": "Bookmarks combined with the selection pane create interactive navigation experiences in reports."
    }
    
    ]
  },
   {
    id: 'powerbi-visualization',
    title: 'Deploy and Maintain Assets',
    description: 'Managing datasets, setting permissions, deploying to workspaces.',
    timePerQuestion: 30,
    questions: [
      {
      "id": 1,
      "question": "What is the purpose of a Power BI workspace?",
      "options": ["To host only DAX measures", "To organize reports, datasets, and dashboards", "To replace Power Query", "To create bookmarks"],
      "correctAnswer": 1,
      "explanation": "Workspaces serve as containers for managing and collaborating on reports, datasets, and dashboards."
    },
    {
      "id": 2,
      "question": "What role allows a user to publish, update, and delete reports in a workspace?",
      "options": ["Viewer", "Contributor", "Admin", "Member"],
      "correctAnswer": 3,
      "explanation": "Members can create, update, and delete content within a workspace, while Admins manage overall settings."
    },
    {
      "id": 3,
      "question": "What is the main purpose of Row-Level Security (RLS) in Power BI?",
      "options": ["Improve performance", "Prevent duplication", "Restrict data access per user", "Sync filters"],
      "correctAnswer": 2,
      "explanation": "RLS is used to limit data visibility based on the roles assigned to different users."
    },
    {
      "id": 4,
      "question": "You schedule a dataset refresh in Power BI Service. What is required for on-premises data sources?",
      "options": ["RLS", "Power BI Gateway", "Incremental Refresh", "API Key"],
      "correctAnswer": 1,
      "explanation": "A Power BI Gateway is necessary to securely connect cloud-based Power BI Service with on-premises data sources."
    },
    {
      "id": 5,
      "question": "Where can you configure dataset refresh schedules in Power BI?",
      "options": ["Power BI Desktop", "Excel", "Power BI Service", "Power Query"],
      "correctAnswer": 2,
      "explanation": "Scheduled refreshes are configured in the Power BI Service after a report is published."
    },
    {
      "id": 6,
      "question": "What does sensitivity labeling in Power BI help with?",
      "options": ["Data sorting", "Visual formatting", "Data protection and compliance", "Conditional formatting"],
      "correctAnswer": 2,
      "explanation": "Sensitivity labels are used to classify and protect data, ensuring compliance with security policies."
    },
    {
      "id": 7,
      "question": "What is a Power BI app used for?",
      "options": ["Developing mobile games", "Creating embedded visuals", "Sharing reports, dashboards, and datasets with a broad audience", "Scheduling DAX refreshes"],
      "correctAnswer": 2,
      "explanation": "Power BI apps package reports, dashboards, and datasets to share with many users in an organized way."
    },
    {
      "id": 8,
      "question": "What’s the difference between Publish to Web and Share in Power BI Service?",
      "options": ["Publish to Web is private; Share is public", "Share requires licensing; Publish to Web makes content public", "Share is read-only", "Publish to Web uses bookmarks"],
      "correctAnswer": 1,
      "explanation": "Publish to Web exposes content publicly, while Share requires a Power BI license and secure access."
    },
    {
      "id": 9,
      "question": "Where can you manage permissions for a published report?",
      "options": ["Power Query", "Power BI Desktop", "Dataset settings", "Workspace or report settings in Power BI Service"],
      "correctAnswer": 3,
      "explanation": "Permissions for published content are managed within the Power BI Service workspace or report settings."
    },
    {
      "id": 10,
      "question": "Which option allows users to view but not edit content in a Power BI workspace?",
      "options": ["Admin", "Member", "Contributor", "Viewer"],
      "correctAnswer": 3,
      "explanation": "The Viewer role provides read-only access to workspace content."
    },
    {
      "id": 11,
      "question": "You want to prevent users from accidentally deleting a dataset. Which role should they be assigned?",
      "options": ["Admin", "Viewer", "Member", "Contributor"],
      "correctAnswer": 1,
      "explanation": "The Viewer role restricts users to read-only access, preventing content deletion."
    },
    {
      "id": 12,
      "question": "What happens if a gateway connection fails during a scheduled refresh?",
      "options": ["Power BI deletes the dataset", "Refresh is skipped, and an error is logged", "Power BI auto-corrects the connection", "The report is unpublished"],
      "correctAnswer": 1,
      "explanation": "When a gateway fails, the refresh attempt is skipped, and an error is logged in the Power BI Service."
    },
    {
      "id": 13,
      "question": "What can you do with a Certified Dataset?",
      "options": ["Share across reports with endorsement", "Use only within one workspace", "Limit data refresh", "Create visuals only"],
      "correctAnswer": 0,
      "explanation": "Certified datasets are endorsed for organization-wide use and can be shared across multiple reports."
    },
    {
      "id": 14,
      "question": "Who can certify datasets in Power BI?",
      "options": ["Any viewer", "Report creators", "Power BI admins or designated approvers", "Workspace members"],
      "correctAnswer": 2,
      "explanation": "Only Power BI admins or designated approvers can certify datasets to ensure data governance."
    },
    {
      "id": 15,
      "question": "What does the Promote label indicate on a dataset?",
      "options": ["It’s public", "It’s certified for compliance", "It’s recommended for use but not formally certified", "It has errors"],
      "correctAnswer": 2,
      "explanation": "Promoted datasets are endorsed as good for use but do not have the same formal approval as certified datasets."
    },
    {
      "id": 16,
      "question": "You want to give users access to a report without giving access to the dataset. What should you do?",
      "options": ["Use RLS", "Share the report link", "Create a Power BI app", "Publish to Web"],
      "correctAnswer": 2,
      "explanation": "Packaging reports in a Power BI app allows sharing with end users while controlling dataset permissions."
    },
    {
      "id": 17,
      "question": "How can you monitor dataset refresh failures?",
      "options": ["In Power Query Editor", "In Power BI Service under Dataset Settings", "In the Performance Analyzer", "Through Excel connector"],
      "correctAnswer": 1,
      "explanation": "Dataset refresh logs and failure notifications are available in the Power BI Service under Dataset Settings."
    },
    {
      "id": 18,
      "question": "What is the benefit of using incremental refresh?",
      "options": ["Deletes old data", "Updates only new or changed rows", "Avoids RLS", "Compresses data"],
      "correctAnswer": 1,
      "explanation": "Incremental refresh optimizes performance by processing only new or modified data instead of the entire dataset."
    },
    {
      "id": 19,
      "question": "Which of the following must be enabled to implement RLS?",
      "options": ["DirectQuery only", "A DAX measure", "Roles and filters on the dataset", "Share report via Publish to Web"],
      "correctAnswer": 2,
      "explanation": "RLS requires defined roles and filters in the dataset to restrict data by user."
    },
    {
      "id": 20,
      "question": "What happens when you promote a dataset in the Power BI Service?",
      "options": ["It becomes certified", "It becomes deprecated", "It is recommended but not governed", "It is deleted after a week"],
      "correctAnswer": 2,
      "explanation": "Promoted datasets are recommended for use but are not certified or governed officially."
    }
    
    ]
  },
  {
  id: 'powerbi-quiz',
  title: 'Power BI Final Certification Practice',
  description: 'fter completing all individual domain quizzes, users can take a Final Comprehensive Quiz that includes randomized questions from all domains to simulate the real exam environment.',
  timePerQuestion: 30,
  questions: [
    {
      id: 1,
      question: 'Which Power BI tool is used to connect and transform data?',
      options: ['Dataflow', 'DAX Studio', 'Power Query Editor', 'Power BI Service'],
      correctAnswer: 2,
      explanation: 'Power Query Editor is the main tool for connecting to data sources and transforming data before loading it into Power BI.'
    },
    {
      id: 2,
      question: 'What is the default join type when merging queries in Power Query?',
      options: ['Inner', 'Left Outer', 'Right Outer', 'Full Outer'],
      correctAnswer: 1,
      explanation: 'The default join type used by Power Query when merging queries is Left Outer join.'
    },
    {
      id: 3,
      question: 'What does query folding allow in Power Query?',
      options: [
        'Writing custom SQL queries',
        'Refreshing datasets manually',
        'Pushing transformations to the data source',
        'Merging multiple reports'
      ],
      correctAnswer: 2,
      explanation: 'Query folding improves performance by pushing data transformation steps to the underlying data source.'
    },
    {
      id: 4,
      question: 'Which of the following removes all rows with errors?',
      options: ['Remove Columns', 'Keep Rows', 'Remove Errors', 'Replace Values'],
      correctAnswer: 2,
      explanation: 'The Remove Errors option discards any rows containing errors from your dataset.'
    },
    {
      id: 5,
      question: 'When you “Append Queries”, you are:',
      options: ['Joining rows', 'Stacking rows from multiple queries', 'Replacing columns', 'Deleting duplicates'],
      correctAnswer: 1,
      explanation: 'Appending queries stacks rows from multiple queries into one combined table.'
    },
    {
      id: 6,
      question: 'What type of relationship is most efficient in Power BI?',
      options: ['Many-to-Many', 'One-to-One', 'One-to-Many', 'Self-referencing'],
      correctAnswer: 2,
      explanation: 'One-to-Many relationships are preferred for efficient data modeling in Power BI.'
    },
    {
      id: 7,
      question: 'What DAX function is used to retrieve a value from a related table?',
      options: ['VALUES', 'CALCULATE', 'RELATED', 'SELECTEDVALUE'],
      correctAnswer: 2,
      explanation: 'The RELATED function retrieves a single related value from another table based on relationships.'
    },
    {
      id: 8,
      question: 'What does the ALL() function do in a DAX expression?',
      options: [
        'Returns only non-blank values',
        'Sorts values in ascending order',
        'Removes filters from the column or table',
        'Returns only distinct rows'
      ],
      correctAnswer: 2,
      explanation: 'ALL() removes filters from a table or column, returning all rows for evaluation.'
    },
    {
      id: 9,
      question: 'What is the best method for calculating a dynamic rank measure?',
      options: ['MAX', 'CALCULATE', 'RANKX', 'DISTINCTCOUNT'],
      correctAnswer: 2,
      explanation: 'RANKX dynamically ranks data based on a specified expression and filter context.'
    },
    {
      id: 10,
      question: 'Which function should you use to avoid divide-by-zero errors?',
      options: ['/', 'IF', 'DIVIDE', 'MOD'],
      correctAnswer: 2,
      explanation: 'DIVIDE handles division safely, returning BLANK instead of an error when dividing by zero.'
    },
    {
      id: 11,
      question: 'What is a tooltip used for in a Power BI visual?',
      options: ['Refresh data', 'Drillthrough action', 'Display context data on hover', 'Create slicers'],
      correctAnswer: 2,
      explanation: 'Tooltips display additional information about a data point when the user hovers over it.'
    },
    {
      id: 12,
      question: 'Which visual allows users to drill down in hierarchy?',
      options: ['KPI', 'Matrix', 'Card', 'Table'],
      correctAnswer: 1,
      explanation: 'Matrix visuals allow hierarchical data exploration with drill-down functionality.'
    },
    {
      id: 13,
      question: 'What is the purpose of bookmarks?',
      options: ['Create dynamic reports', 'Save report states', 'Group visuals', 'Remove filters'],
      correctAnswer: 1,
      explanation: 'Bookmarks save the current state of a report page, including filters and visuals, for later use.'
    },
    {
      id: 14,
      question: 'What is cross-highlighting?',
      options: [
        'Highlighting text',
        'Filtering multiple visuals from a single selection',
        'Exporting visuals',
        'Creating custom visuals'
      ],
      correctAnswer: 1,
      explanation: 'Cross-highlighting filters and emphasizes related data points across multiple visuals.'
    },
    {
      id: 15,
      question: 'Which visual is best for analyzing cumulative totals over time?',
      options: ['Pie', 'Line', 'KPI', 'Waterfall'],
      correctAnswer: 1,
      explanation: 'Line charts are effective for visualizing cumulative totals and trends over time.'
    },
    {
      id: 16,
      question: 'What is the function of a gateway in Power BI?',
      options: [
        'Create data models',
        'Schedule refresh for cloud sources',
        'Connect on-premises data to Power BI Service',
        'Monitor visuals'
      ],
      correctAnswer: 2,
      explanation: 'A gateway connects on-premises data sources securely to the Power BI Service.'
    },
    {
      id: 17,
      question: 'Where can you manage workspace permissions?',
      options: ['Power BI Desktop', 'Report Settings', 'Power BI Service', 'DAX Editor'],
      correctAnswer: 2,
      explanation: 'Workspace permissions are managed in the Power BI Service under workspace settings.'
    },
    {
      id: 18,
      question: 'Which role allows full editing and publishing rights in a workspace?',
      options: ['Member', 'Contributor', 'Admin', 'Viewer'],
      correctAnswer: 2,
      explanation: 'Admin role provides full rights to edit, publish, and manage workspace settings and members.'
    },
    {
      id: 19,
      question: 'What feature ensures only authorized users see specific rows of data?',
      options: ['Dataflow', 'Role-based security', 'Row-level security (RLS)', 'Workspace permissions'],
      correctAnswer: 2,
      explanation: 'RLS restricts access to specific rows of data based on user roles and filters.'
    },
    {
      id: 20,
      question: 'What happens when a dataset is certified in Power BI?',
      options: [
        'It’s hidden from users',
        'Only admins can use it',
        "It's marked as a trusted, reliable source",
        'It gets uploaded to Azure'
      ],
      correctAnswer: 2,
      explanation: 'Certification marks a dataset as reliable and trusted for use across the organization.'
    },
        {
      id: 21,
      question: 'What does publishing a Power BI report do?',
      options: [
        'Saves the file to your desktop',
        'Uploads the report to OneDrive',
        'Deploys the report to the Power BI Service workspace',
        'Exports the report as PDF'
      ],
      correctAnswer: 2,
      explanation: 'Publishing uploads the report to the Power BI Service for sharing and online use.'
    },
    {
      id: 22,
      question: 'Which method is used to schedule a dataset refresh?',
      options: [
        'Using Power Query',
        'From the workspace → dataset settings',
        'Through DAX expressions',
        'In Power BI Desktop'
      ],
      correctAnswer: 1,
      explanation: 'Scheduled refresh is managed from the Power BI Service under dataset settings.'
    },
    {
      id: 23,
      question: 'Which gateway type supports both Import and DirectQuery modes?',
      options: [
        'Personal Gateway',
        'Standard Gateway',
        'On-premises data gateway (enterprise mode)',
        'SQL Data Sync'
      ],
      correctAnswer: 2,
      explanation: 'On-premises data gateway (enterprise mode) supports both Import and DirectQuery connections.'
    },
    {
      id: 24,
      question: 'What is required to share a report with others in your organization?',
      options: [
        'Power BI Desktop license',
        'Power Automate connector',
        'Power BI Pro or Premium per user (PPU) license',
        'SQL credentials'
      ],
      correctAnswer: 2,
      explanation: 'Sharing reports in Power BI requires a Pro or Premium per user license.'
    },
    {
      id: 25,
      question: 'How do you apply row-level security (RLS)?',
      options: [
        'In Power Query',
        'In the Power BI Service > Admin portal',
        'By defining roles in Power BI Desktop',
        'Using Dataflows'
      ],
      correctAnswer: 2,
      explanation: 'RLS is defined in Power BI Desktop by creating roles with DAX filters before publishing.'
    },
    {
      id: 26,
      question: 'Which users can access content in a published app?',
      options: [
        'Workspace Admins only',
        'Anyone with link',
        'Users assigned permissions during app publishing',
        'Only Pro license holders'
      ],
      correctAnswer: 2,
      explanation: 'Only users granted permissions when publishing an app can access its content.'
    },
    {
      id: 27,
      question: 'What is the use of a sensitivity label in Power BI?',
      options: [
        'Set row-level filters',
        'Restrict report access',
        'Classify and protect sensitive data',
        'Format visuals'
      ],
      correctAnswer: 2,
      explanation: 'Sensitivity labels classify and secure data, enforcing compliance rules on reports and datasets.'
    },
    {
      id: 28,
      question: 'What is the first step to deploy a report as an app in Power BI Service?',
      options: [
        'Export to Excel',
        'Share the .pbix file',
        'Create and publish the app from a workspace',
        'Enable dataflows'
      ],
      correctAnswer: 2,
      explanation: 'You must first create and publish the app from a workspace before sharing with users.'
    },
    {
      id: 29,
      question: 'Where are usage metrics for a report found?',
      options: [
        'Power BI Desktop',
        'Microsoft 365 Admin Center',
        'Power BI Service → Report → View usage metrics',
        'Query Editor'
      ],
      correctAnswer: 2,
      explanation: 'Usage metrics can be accessed directly from the Power BI Service under the report menu.'
    },
    {
      id: 30,
      question: 'How can you prevent users from downloading report data?',
      options: [
        'Remove report filters',
        'Disable export data under dataset settings',
        'Use bookmarks',
        'Lock report page'
      ],
      correctAnswer: 1,
      explanation: 'Disabling the export data option under dataset settings restricts download permissions.'
    },
    {
      id: 31,
      question: 'Which role allows publishing reports but not managing users?',
      options: ['Viewer', 'Admin', 'Contributor', 'Member'],
      correctAnswer: 2,
      explanation: 'Contributors can publish and edit content but cannot change workspace user permissions.'
    },
    {
      id: 32,
      question: 'How are dataset refresh failures typically resolved?',
      options: [
        'Delete the report',
        'Switch to Import mode',
        'Check gateway connection, credentials, and error logs',
        'Export the error as a report'
      ],
      correctAnswer: 2,
      explanation: 'Refresh failures are often due to gateway or credential issues that must be checked and fixed.'
    },
    {
      id: 33,
      question: 'Which of the following enables data protection integration with Microsoft Purview?',
      options: ['Dataflows', 'Deployment pipelines', 'Sensitivity labels', 'Query folding'],
      correctAnswer: 2,
      explanation: 'Sensitivity labels integrate with Microsoft Purview to enforce data protection policies.'
    },
    {
      id: 34,
      question: 'What does "certifying a dataset" mean in governance terms?',
      options: [
        'Data is locked from editing',
        'Only admins can access the dataset',
        'The dataset has been validated and is recommended for reuse',
        'The dataset has been filtered'
      ],
      correctAnswer: 2,
      explanation: 'Certified datasets are validated as trusted sources for organizational reporting.'
    },
    {
      id: 35,
      question: 'Which license allows sharing with free users via apps?',
      options: ['Pro', 'Premium capacity (P SKU)', 'PPU (Premium per user)', 'None'],
      correctAnswer: 1,
      explanation: 'Premium capacity allows sharing reports with free Power BI users through published apps.'
    },
    {
      id: 36,
      question: 'What must be in place for scheduled refresh to work on-premises?',
      options: [
        'SQL Server license',
        'Gateway installed and configured',
        'Deployment pipeline',
        'Custom visual'
      ],
      correctAnswer: 1,
      explanation: 'An on-premises gateway must be configured to enable scheduled refresh for local data sources.'
    },
    {
      id: 37,
      question: 'What happens if you delete a workspace?',
      options: [
        'Reports remain online',
        'Reports are exported to Excel',
        'All contained assets are deleted',
        'Dataflows are retained'
      ],
      correctAnswer: 2,
      explanation: 'Deleting a workspace removes all reports, datasets, and dashboards within it.'
    },
    {
      id: 38,
      question: 'Which deployment feature allows moving content from dev to test to prod environments?',
      options: ['Dataflows', 'Row-level security', 'Deployment pipelines', 'Gateways'],
      correctAnswer: 2,
      explanation: 'Deployment pipelines enable promoting content between development, test, and production stages.'
    },
    {
      id: 39,
      question: 'What is the minimum workspace role required to build a report on an existing dataset?',
      options: ['Viewer', 'Contributor', 'Admin', 'None'],
      correctAnswer: 1,
      explanation: 'Contributor role is required to create or build reports using existing datasets.'
    },
    {
      id: 40,
      question: 'Which Power BI Service feature allows versioning and promoting reports across environments?',
      options: ['App workspace', 'Deployment pipelines', 'Q&A visual', 'Report templates'],
      correctAnswer: 1,
      explanation: 'Deployment pipelines manage versioning and promotion of reports across different environments.'
    },
       {
      id: 41,
      question: 'Which visual type is ideal for showing proportions of a whole?',
      options: ['Pie chart', 'Line chart', 'Clustered bar chart', 'Table'],
      correctAnswer: 0,
      explanation: 'Pie charts are used to display parts-to-whole relationships effectively.'
    },
    {
      id: 42,
      question: 'Which DAX function is used to return a single value when a column has one distinct value?',
      options: ['VALUES', 'SELECTEDVALUE', 'FIRSTNONBLANK', 'MAX'],
      correctAnswer: 1,
      explanation: 'SELECTEDVALUE returns a value when there is only one distinct value in the column, otherwise BLANK.'
    },
    {
      id: 43,
      question: 'Which Power BI feature enables users to ask natural language questions about their data?',
      options: ['Bookmarks', 'Q&A visual', 'Drillthrough', 'Cross-highlighting'],
      correctAnswer: 1,
      explanation: 'The Q&A visual allows users to ask natural language questions and get instant visual answers.'
    },
    {
      id: 44,
      question: 'What is the main advantage of using a star schema in Power BI data modeling?',
      options: [
        'Improves query performance and simplifies relationships',
        'Allows many-to-many relationships only',
        'Stores all data in one large table',
        'Eliminates the need for measures'
      ],
      correctAnswer: 0,
      explanation: 'Star schemas improve performance, simplify relationships, and are considered best practice for data models.'
    },
    {
      id: 45,
      question: 'Which file format is used to export a Power BI template?',
      options: ['.pbix', '.pbit', '.xlsx', '.csv'],
      correctAnswer: 1,
      explanation: 'Power BI templates are exported with the .pbit extension, excluding the dataset but retaining structure and visuals.'
    },
    {
      id: 46,
      question: 'Which feature allows you to create different report views for different audiences?',
      options: ['Bookmarks', 'Personal bookmarks', 'Row-level security', 'Conditional formatting'],
      correctAnswer: 2,
      explanation: 'Row-level security can be used to create tailored views of data for different users or roles.'
    },
    {
      id: 47,
      question: 'What does the CALCULATE function do in DAX?',
      options: [
        'Returns a list of unique values',
        'Changes the filter context for a calculation',
        'Returns the current filter applied',
        'Filters a visual only'
      ],
      correctAnswer: 1,
      explanation: 'CALCULATE modifies the filter context of an expression, allowing advanced calculations.'
    },
    {
      id: 48,
      question: 'Which feature allows combining multiple datasets into one semantic model in Power BI Service?',
      options: ['Dataflows', 'Composite models', 'DirectQuery', 'Cross-filtering'],
      correctAnswer: 1,
      explanation: 'Composite models allow combining multiple data sources and datasets into a single model.'
    },
    {
      id: 49,
      question: 'What is the primary use of the KPI visual in Power BI?',
      options: [
        'To display raw data',
        'To show the status of a metric against a target',
        'To filter datasets',
        'To display hierarchies'
      ],
      correctAnswer: 1,
      explanation: 'KPI visuals compare performance against a target value using indicators like color coding.'
    },
    {
      id: 50,
      question: 'Which transformation in Power Query is irreversible once applied?',
      options: [
        'Removing rows',
        'Changing data types',
        'Renaming columns',
        'Merging columns'
      ],
      correctAnswer: 0,
      explanation: 'Once rows are removed in Power Query, they cannot be recovered unless you undo or delete the applied step.'
    },
    {
      id: 51,
      question: 'Which type of visual interaction highlights data points across multiple visuals on the same page?',
      options: [
        'Drillthrough',
        'Cross-highlighting',
        'Bookmarks',
        'Filters'
      ],
      correctAnswer: 1,
      explanation: 'Cross-highlighting dynamically emphasizes related data points across multiple visuals when a selection is made.'
    },
    {
      id: 52,
      question: 'Which connector type provides real-time data updates in Power BI?',
      options: ['Import', 'DirectQuery', 'Live connection', 'Excel workbook'],
      correctAnswer: 1,
      explanation: 'DirectQuery enables real-time queries to the source system, providing up-to-date results.'
    },
    {
      id: 53,
      question: 'Which DAX function counts rows in a table that meet a specified condition?',
      options: ['COUNTROWS', 'FILTER', 'CALCULATE', 'COUNTAX'],
      correctAnswer: 0,
      explanation: 'COUNTROWS counts the number of rows in a table or in a table expression that meets the specified criteria.'
    },
    {
      id: 54,
      question: 'Which relationship type can potentially create ambiguous paths in a data model?',
      options: ['One-to-Many', 'Many-to-Many', 'One-to-One', 'Inactive relationship'],
      correctAnswer: 1,
      explanation: 'Many-to-Many relationships can lead to ambiguity in filter propagation and calculations.'
    },
    {
      id: 55,
      question: 'What feature in Power BI allows promoting or certifying datasets for reuse?',
      options: [
        'Sensitivity labels',
        'Dataset endorsement',
        'Deployment pipelines',
        'Dataflows'
      ],
      correctAnswer: 1,
      explanation: 'Dataset endorsement (promoted or certified) identifies trusted datasets for organizational reuse.'
    },
    {
      id: 56,
      question: 'Which transformation in Power Query helps normalize nested data structures like JSON?',
      options: [
        'Expand column',
        'Group by',
        'Unpivot columns',
        'Split column'
      ],
      correctAnswer: 0,
      explanation: 'Expand column allows flattening nested structures such as JSON records into table rows and columns.'
    },
    {
      id: 57,
      question: 'Which Power BI visual is best suited for analyzing performance against goals with time trends?',
      options: ['Matrix', 'KPI', 'Gauge', 'Waterfall'],
      correctAnswer: 1,
      explanation: 'KPI visuals track performance against goals, often accompanied by time-based trend indicators.'
    },
    {
      id: 58,
      question: 'What is the maximum number of tables supported in a single Power BI data model?',
      options: ['No hard limit', '100', '500', 'Unlimited with Premium only'],
      correctAnswer: 0,
      explanation: 'There is no hard limit on the number of tables, but performance considerations may affect practical limits.'
    },
    {
      id: 59,
      question: 'Which DAX function evaluates an expression in a modified filter context?',
      options: ['CALCULATE', 'FILTER', 'ALL', 'SUMX'],
      correctAnswer: 0,
      explanation: 'CALCULATE allows evaluating an expression under modified or additional filter conditions.'
    },
    {
      id: 60,
      question: 'Which feature in Power BI helps move content across development, test, and production?',
      options: [
        'Deployment pipelines',
        'Dataflows',
        'Workspaces',
        'App publishing'
      ],
      correctAnswer: 0,
      explanation: 'Deployment pipelines manage report promotion between development, testing, and production stages.'
    },
        {
      id: 61,
      question: 'What is a tooltip used for in a Power BI visual?',
      options: ['Refresh data', 'Drillthrough action', 'Display context data on hover', 'Create slicers'],
      correctAnswer: 2,
      explanation: 'Tooltips display extra details about a data point when users hover over it in a visual.'
    },
    {
      id: 62,
      question: 'Which visual allows users to drill down in hierarchy?',
      options: ['KPI', 'Matrix', 'Card', 'Table'],
      correctAnswer: 1,
      explanation: 'Matrix visuals support drill-down functionality for exploring data hierarchies.'
    },
    {
      id: 63,
      question: 'What is the purpose of bookmarks?',
      options: ['Create dynamic reports', 'Save report states', 'Group visuals', 'Remove filters'],
      correctAnswer: 1,
      explanation: 'Bookmarks capture the current state of a report page, including filters and visuals.'
    },
    {
      id: 64,
      question: 'What is cross-highlighting?',
      options: [
        'Highlighting text',
        'Filtering multiple visuals from a single selection',
        'Exporting visuals',
        'Creating custom visuals'
      ],
      correctAnswer: 1,
      explanation: 'Cross-highlighting emphasizes related data points in multiple visuals when a selection is made.'
    },
    {
      id: 65,
      question: 'Which visual is best for analyzing cumulative totals over time?',
      options: ['Pie', 'Line', 'KPI', 'Waterfall'],
      correctAnswer: 1,
      explanation: 'Line charts are ideal for analyzing cumulative totals and trends over time periods.'
    },
    {
      id: 66,
      question: 'Which visual would you use to compare actual values to a target value?',
      options: ['Matrix', 'Gauge', 'Line chart', 'Pie chart'],
      correctAnswer: 1,
      explanation: 'Gauge visuals display progress towards a defined target, making comparisons clear.'
    },
    {
      id: 67,
      question: 'Which Power BI feature allows report users to select specific data points and filter related visuals automatically?',
      options: ['Bookmarks', 'Drillthrough', 'Report-level filters', 'Visual interactions'],
      correctAnswer: 3,
      explanation: 'Visual interactions allow selections in one visual to filter or highlight data in related visuals.'
    },
    {
      id: 68,
      question: 'Which type of filter applies to all pages in a Power BI report?',
      options: ['Page-level filters', 'Report-level filters', 'Visual-level filters', 'Drillthrough filters'],
      correctAnswer: 1,
      explanation: 'Report-level filters apply globally across all report pages.'
    },
    {
      id: 69,
      question: 'Which visual type allows displaying hierarchical data in a tree-like structure?',
      options: ['Matrix', 'Tree Map', 'Scatter plot', 'Gauge'],
      correctAnswer: 1,
      explanation: 'Tree Map visuals represent hierarchical data with nested rectangles, sized by value.'
    },
    {
      id: 70,
      question: 'What is the main purpose of the decomposition tree visual?',
      options: [
        'To show geographical data',
        'To break down a measure and explore its contributing factors',
        'To track KPIs',
        'To show percentage contribution'
      ],
      correctAnswer: 1,
      explanation: 'The decomposition tree helps analyze data by drilling into contributing factors step by step.'
    },
    {
      id: 71,
      question: 'Which feature allows users to switch between different report views or scenarios using buttons?',
      options: ['Drillthrough', 'Bookmarks', 'Visual-level filters', 'Parameters'],
      correctAnswer: 1,
      explanation: 'Bookmarks, combined with buttons, create navigation experiences and custom report views.'
    },
    {
      id: 72,
      question: 'Which Power BI visual is best for highlighting variance between categories and totals?',
      options: ['Waterfall', 'Pie chart', 'Gauge', 'Clustered column chart'],
      correctAnswer: 0,
      explanation: 'Waterfall charts effectively highlight changes and variances leading to a final total.'
    },
    {
      id: 73,
      question: 'Which option allows embedding Power BI visuals in other applications like Teams or SharePoint?',
      options: [
        'Publishing to web',
        'Power Automate',
        'Embed code or Power BI tabs in Teams/SharePoint',
        'Export to PDF'
      ],
      correctAnswer: 2,
      explanation: 'Power BI visuals can be embedded in Microsoft Teams or SharePoint using embed links or tabs.'
    },
    {
      id: 74,
      question: 'Which visual is suitable for displaying data distribution and identifying outliers?',
      options: ['Scatter chart', 'Line chart', 'Pie chart', 'Card visual'],
      correctAnswer: 0,
      explanation: 'Scatter charts visualize data distribution and can help detect clusters and outliers.'
    },
    {
      id: 75,
      question: 'What is the function of the "Drillthrough" feature?',
      options: [
        'Highlighting data points across visuals',
        'Navigating to a page with detailed information about a selection',
        'Creating bookmarks',
        'Exporting report pages'
      ],
      correctAnswer: 1,
      explanation: 'Drillthrough enables users to navigate to a dedicated page for more details on a data point.'
    },
    {
      id: 76,
      question: 'Which Power BI visual type is best for comparing trends for multiple categories over time?',
      options: ['Clustered column chart', 'Line chart', 'Pie chart', 'Gauge'],
      correctAnswer: 1,
      explanation: 'Line charts display trends over time and can compare multiple series effectively.'
    },
    {
      id: 77,
      question: 'Which Power BI feature enables adding dynamic reference lines to visuals?',
      options: ['Analytics pane', 'Bookmarks', 'Drillthrough', 'Cross-highlighting'],
      correctAnswer: 0,
      explanation: 'The Analytics pane allows adding dynamic trendlines, reference lines, and forecasts to visuals.'
    },
    {
      id: 78,
      question: 'What is the primary use of a Card visual in Power BI?',
      options: [
        'Display a single summary value such as total sales',
        'Compare categories',
        'Show percentages of a whole',
        'Plot data points on a chart'
      ],
      correctAnswer: 0,
      explanation: 'Cards are used to display a single, important metric clearly and prominently.'
    },
    {
      id: 79,
      question: 'Which formatting feature can dynamically change colors in visuals based on data values?',
      options: ['Conditional formatting', 'Bookmarks', 'Themes', 'Drillthrough filters'],
      correctAnswer: 0,
      explanation: 'Conditional formatting changes colors dynamically based on rules or data thresholds.'
    },
    {
      id: 80,
      question: 'Which Power BI visual would best illustrate parts of a whole and allow drill-down into sub-categories?',
      options: ['Tree Map', 'Matrix', 'Pie chart', 'Scatter plot'],
      correctAnswer: 0,
      explanation: 'Tree Map visuals display hierarchical data as parts of a whole with drill-down capabilities.'
    },
        {
      id: 81,
      question: 'Which Power BI feature allows creating multiple pages tailored for different audiences within the same report?',
      options: ['Drillthrough pages', 'Report-level filters', 'Personal bookmarks', 'Row-level security'],
      correctAnswer: 0,
      explanation: 'Drillthrough pages provide customized views with detailed data for specific selections or audiences.'
    },
    {
      id: 82,
      question: 'Which feature allows capturing and sharing report snapshots in Power BI Service?',
      options: ['Usage metrics', 'Comments and annotations', 'Dataflows', 'Deployment pipelines'],
      correctAnswer: 1,
      explanation: 'Comments and annotations let users capture snapshots and discuss specific report states with others.'
    },
    {
      id: 83,
      question: 'Which type of visual is best for analyzing trends and forecasting future values?',
      options: ['Pie chart', 'Line chart with forecast', 'Card visual', 'Matrix visual'],
      correctAnswer: 1,
      explanation: 'Line charts with forecasting enabled can project future values based on historical data trends.'
    },
    {
      id: 84,
      question: 'Which feature in Power BI Service shows who has viewed and interacted with a report?',
      options: ['Row-level security logs', 'Usage metrics', 'Deployment pipelines', 'Sensitivity labels'],
      correctAnswer: 1,
      explanation: 'Usage metrics show viewer counts, interaction frequency, and other report activity details.'
    },
    {
      id: 85,
      question: 'Which Power BI feature allows setting up automated data-driven email alerts?',
      options: ['Power Automate', 'Report subscriptions', 'Data alerts in dashboards', 'Bookmarks'],
      correctAnswer: 2,
      explanation: 'Data alerts trigger email notifications when KPI thresholds or specific data conditions are met.'
    },
    {
      id: 86,
      question: 'Which Power BI functionality supports integrating R or Python scripts for advanced analytics?',
      options: ['Custom visuals', 'Analytics pane', 'Script visuals', 'Dataflows'],
      correctAnswer: 2,
      explanation: 'Script visuals allow embedding R or Python scripts for statistical analysis or visualizations.'
    },
    {
      id: 87,
      question: 'What is the main use of Quick Measures in Power BI Desktop?',
      options: [
        'Automatically creating DAX calculations without manual coding',
        'Defining relationships between tables',
        'Creating bookmarks for navigation',
        'Formatting visuals quickly'
      ],
      correctAnswer: 0,
      explanation: 'Quick Measures generate common DAX calculations using a simple interface without requiring custom formulas.'
    },
    {
      id: 88,
      question: 'Which feature in Power BI Service can promote a dataset for recommended organizational use?',
      options: ['Sensitivity labels', 'Endorsement (Promoted/Certified)', 'Dataflows', 'Gateway settings'],
      correctAnswer: 1,
      explanation: 'Dataset endorsement marks datasets as promoted or certified to signal trusted sources.'
    },
    {
      id: 89,
      question: 'Which Power BI feature allows collaboration and co-authoring on reports stored in OneDrive or SharePoint?',
      options: [
        'Usage metrics',
        'Report comments',
        'Auto-sync for shared workspaces',
        'OneDrive/SharePoint version control'
      ],
      correctAnswer: 3,
      explanation: 'Reports stored in OneDrive or SharePoint allow version history and real-time collaboration.'
    },
    {
      id: 90,
      question: 'Which feature allows exporting an entire report, including all pages, to a PDF file?',
      options: [
        'Export data',
        'Export to PDF',
        'Power Automate connector',
        'Deployment pipelines'
      ],
      correctAnswer: 1,
      explanation: 'Export to PDF generates a PDF version of all report pages for offline sharing.'
    },
    {
      id: 91,
      question: 'What is the function of a gateway in Power BI?',
      options: [
        'Create data models',
        'Schedule refresh for cloud sources',
        'Connect on-premises data to Power BI Service',
        'Monitor visuals'
      ],
      correctAnswer: 2,
      explanation: 'A gateway securely connects on-premises data sources to the Power BI Service.'
    },
    {
      id: 92,
      question: 'Where can you manage workspace permissions?',
      options: ['Power BI Desktop', 'Report Settings', 'Power BI Service', 'DAX Editor'],
      correctAnswer: 2,
      explanation: 'Workspace permissions are managed within the Power BI Service under the workspace settings panel.'
    },
    {
      id: 93,
      question: 'Which role allows full editing and publishing rights in a workspace?',
      options: ['Member', 'Contributor', 'Admin', 'Viewer'],
      correctAnswer: 2,
      explanation: 'The Admin role grants full editing, publishing, and user management capabilities in a workspace.'
    },
    {
      id: 94,
      question: 'What feature ensures only authorized users see specific rows of data?',
      options: ['Dataflow', 'Role-based security', 'Row-level security (RLS)', 'Workspace permissions'],
      correctAnswer: 2,
      explanation: 'RLS restricts visible rows of data to only those allowed by assigned roles and filters.'
    },
    {
      id: 95,
      question: 'What happens when a dataset is certified in Power BI?',
      options: [
        'It’s hidden from users',
        'Only admins can use it',
        "It's marked as a trusted, reliable source",
        'It gets uploaded to Azure'
      ],
      correctAnswer: 2,
      explanation: 'Certification marks a dataset as a trusted, reliable source for use across the organization.'
    },
    {
      id: 96,
      question: 'What does publishing a Power BI report do?',
      options: [
        'Saves the file to your desktop',
        'Uploads the report to OneDrive',
        'Deploys the report to the Power BI Service workspace',
        'Exports the report as PDF'
      ],
      correctAnswer: 2,
      explanation: 'Publishing moves the report from Power BI Desktop to the Power BI Service for sharing and collaboration.'
    },
    {
      id: 97,
      question: 'Which method is used to schedule a dataset refresh?',
      options: [
        'Using Power Query',
        'From the workspace → dataset settings',
        'Through DAX expressions',
        'In Power BI Desktop'
      ],
      correctAnswer: 1,
      explanation: 'Dataset refresh scheduling is configured under dataset settings in the Power BI Service workspace.'
    },
    {
      id: 98,
      question: 'Which gateway type supports both Import and DirectQuery modes?',
      options: [
        'Personal Gateway',
        'Standard Gateway',
        'On-premises data gateway (enterprise mode)',
        'SQL Data Sync'
      ],
      correctAnswer: 2,
      explanation: 'On-premises data gateway (enterprise mode) supports both import and direct query connections.'
    },
    {
      id: 99,
      question: 'What is required to share a report with others in your organization?',
      options: [
        'Power BI Desktop license',
        'Power Automate connector',
        'Power BI Pro or Premium per user (PPU) license',
        'SQL credentials'
      ],
      correctAnswer: 2,
      explanation: 'Sharing a report in Power BI requires a Pro or Premium Per User license.'
    },
    {
      id: 100,
      question: 'How do you apply row-level security (RLS)?',
      options: [
        'In Power Query',
        'In the Power BI Service > Admin portal',
        'By defining roles in Power BI Desktop',
        'Using Dataflows'
      ],
      correctAnswer: 2,
      explanation: 'RLS is configured in Power BI Desktop by defining roles with DAX filters before publishing.'
    },
        {
      id: 101,
      question: 'Which users can access content in a published app?',
      options: [
        'Workspace Admins only',
        'Anyone with link',
        'Users assigned permissions during app publishing',
        'Only Pro license holders'
      ],
      correctAnswer: 2,
      explanation: 'Only users explicitly assigned permissions during app publishing can access the published app.'
    },
    {
      id: 102,
      question: 'What is the use of a sensitivity label in Power BI?',
      options: [
        'Set row-level filters',
        'Restrict report access',
        'Classify and protect sensitive data',
        'Format visuals'
      ],
      correctAnswer: 2,
      explanation: 'Sensitivity labels help classify and protect sensitive organizational data across reports and dashboards.'
    },
    {
      id: 103,
      question: 'What is the first step to deploy a report as an app in Power BI Service?',
      options: [
        'Export to Excel',
        'Share the .pbix file',
        'Create and publish the app from a workspace',
        'Enable dataflows'
      ],
      correctAnswer: 2,
      explanation: 'To deploy a report as an app, you first create and publish it from a workspace.'
    },
    {
      id: 104,
      question: 'Where are usage metrics for a report found?',
      options: [
        'Power BI Desktop',
        'Microsoft 365 Admin Center',
        'Power BI Service → Report → View usage metrics',
        'Query Editor'
      ],
      correctAnswer: 2,
      explanation: 'Usage metrics can be viewed in the Power BI Service under the specific report’s menu options.'
    },
    {
      id: 105,
      question: 'How can you prevent users from downloading report data?',
      options: [
        'Remove report filters',
        'Disable export data under dataset settings',
        'Use bookmarks',
        'Lock report page'
      ],
      correctAnswer: 1,
      explanation: 'You can disable export data under dataset settings to prevent downloading of underlying data.'
    },
    {
      id: 106,
      question: 'Which role allows publishing reports but not managing users?',
      options: ['Viewer', 'Admin', 'Contributor', 'Member'],
      correctAnswer: 2,
      explanation: 'Contributors can publish and edit reports but do not have permissions to manage workspace users.'
    },
    {
      id: 107,
      question: 'How are dataset refresh failures typically resolved?',
      options: [
        'Delete the report',
        'Switch to Import mode',
        'Check gateway connection, credentials, and error logs',
        'Export the error as a report'
      ],
      correctAnswer: 2,
      explanation: 'Dataset refresh issues are commonly fixed by verifying gateway connectivity, credentials, and logs.'
    },
    {
      id: 108,
      question: 'Which of the following enables data protection integration with Microsoft Purview?',
      options: ['Dataflows', 'Deployment pipelines', 'Sensitivity labels', 'Query folding'],
      correctAnswer: 2,
      explanation: 'Sensitivity labels integrate with Microsoft Purview to enforce data classification and protection.'
    },
    {
      id: 109,
      question: 'What does "certifying a dataset" mean in governance terms?',
      options: [
        'Data is locked from editing',
        'Only admins can access the dataset',
        'The dataset has been validated and is recommended for reuse',
        'The dataset has been filtered'
      ],
      correctAnswer: 2,
      explanation: 'Certifying a dataset indicates it has been validated and is recommended as a trusted source.'
    },
    {
      id: 110,
      question: 'Which license allows sharing with free users via apps?',
      options: ['Pro', 'Premium capacity (P SKU)', 'PPU (Premium per user)', 'None'],
      correctAnswer: 1,
      explanation: 'Premium capacity allows content sharing with free Power BI users through apps.'
    },
    {
      id: 111,
      question: 'What must be in place for scheduled refresh to work on-premises?',
      options: [
        'SQL Server license',
        'Gateway installed and configured',
        'Deployment pipeline',
        'Custom visual'
      ],
      correctAnswer: 1,
      explanation: 'An on-premises data gateway must be properly installed and configured for scheduled refresh.'
    },
    {
      id: 112,
      question: 'What happens if you delete a workspace?',
      options: [
        'Reports remain online',
        'Reports are exported to Excel',
        'All contained assets are deleted',
        'Dataflows are retained'
      ],
      correctAnswer: 2,
      explanation: 'Deleting a workspace permanently deletes all reports, dashboards, datasets, and dataflows in it.'
    },
    {
      id: 113,
      question: 'Which deployment feature allows moving content from dev to test to prod environments?',
      options: ['Dataflows', 'Row-level security', 'Deployment pipelines', 'Gateways'],
      correctAnswer: 2,
      explanation: 'Deployment pipelines streamline content promotion across development, test, and production stages.'
    },
    {
      id: 114,
      question: 'What is the minimum workspace role required to build a report on an existing dataset?',
      options: ['Viewer', 'Contributor', 'Admin', 'None'],
      correctAnswer: 1,
      explanation: 'The Contributor role allows building reports using existing datasets in a workspace.'
    },
    {
      id: 115,
      question: 'Which Power BI Service feature allows versioning and promoting reports across environments?',
      options: ['App workspace', 'Deployment pipelines', 'Q&A visual', 'Report templates'],
      correctAnswer: 1,
      explanation: 'Deployment pipelines provide version control and promotion of reports across multiple environments.'
    }

    
  ]
}

];