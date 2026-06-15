const app = document.querySelector("#app");

const brandLockup = `<span class="brand-mark" aria-hidden="true"></span><span class="brand-word">Precision<span>OS</span></span>`;

const navItems = [
  "Dashboard",
  "Upload SOP / Source",
  "Workflow Maps",
  "Procedures",
  "Workers",
  "Review Queue",
  "Dead Leads",
  "Campaigns",
  "Voice Worker",
  "Bookings",
  "Revenue Tracking",
  "Connected Apps",
  "Marketplace",
  "Settings",
];

const navGroups = [
  { label: "Main", items: ["Dashboard", "Upload SOP / Source", "Workflow Maps", "Procedures", "Workers", "Review Queue"] },
  { label: "Revenue", items: ["Dead Leads", "Campaigns", "Voice Worker", "Bookings", "Revenue Tracking"] },
  { label: "Platform", items: ["Connected Apps", "Marketplace"] },
  { label: "System", items: ["Settings"] },
];

const launchOffers = [
  {
    name: "Guided Workflow Sprint",
    price: "$2,500",
    suffix: "setup + platform access",
    cta: "Start One Workflow",
    data: "guided-workflow-sprint",
    summary: "Turn one messy workflow into a working operating system.",
    detail: "Pick the workflow causing the most admin, delays, missed handoffs or repeated questions. Precision OS maps it, documents it, adds review gates and prepares the operating pack your team can run.",
    includes: ["1 workflow mapped", "Up to 5 phases", "Procedures", "Templates", "AI workers", "Review gates", "Handover Loom", "Written review rounds", "Exportable operating pack"],
  },
  {
    name: "Dead Lead Reactivation OS",
    price: "From $500",
    suffix: "/ month + usage + performance",
    cta: "Reactivate Old Leads",
    data: "dead-lead-reactivation-os",
    summary: "Reactivate old leads with tracked SMS, Voice Worker follow-up and booked-call tracking.",
    detail: "Upload old enquiries, abandoned quotes or inactive contacts. Precision OS cleans the list, checks consent risk, launches a short message, classifies replies, queues qualified calls and tracks recovered revenue.",
    includes: ["Lead import and cleanup", "Consent and opt-out review", "2-line SMS campaign", "Reply classifier", "Voice Worker follow-up", "Call summaries", "Booking tracker", "Revenue attribution", "Success fee tracking"],
  },
];

const launchFlow = ["Source material", "Workflow map", "Procedures", "AI workers", "Review gates", "Connected apps", "Execution view"];

const reactivationSteps = [
  ["Lead upload", "CSV, CRM export or pasted old enquiries"],
  ["List cleanup", "Duplicates, missing fields and inactive records flagged"],
  ["Consent review", "Opt-out and risk checks before anything sends"],
  ["SMS campaign", "Short 2-line reactivation message"],
  ["Reply classifier", "Positive, neutral, negative and opt-out routing"],
  ["Voice queue", "Positive replies move to tracked call follow-up"],
  ["Bookings", "Qualified opportunities are booked and attributed"],
];

const funnelOptions = [
  {
    key: "workflow",
    title: "Start One Workflow",
    label: "Guided Workflow Sprint",
    price: "$2,500 setup + platform access",
    summary: "For onboarding, delivery, reporting, sales follow-up, admin, support or internal handoffs.",
    steps: ["Upload SOPs/docs", "Generate workflow map", "Review and deploy"],
    cta: "Start One Workflow",
    event: "path_selected_workflow",
  },
  {
    key: "dead-leads",
    title: "Reactivate Old Leads",
    label: "Dead Lead Reactivation OS",
    price: "From $500/month + usage + performance",
    summary: "For old enquiries, abandoned quotes, inactive contacts and dead CRM leads.",
    steps: ["Upload old leads", "Approve reactivation campaign", "Track replies, calls and bookings"],
    cta: "Reactivate Old Leads",
    event: "path_selected_dead_leads",
  },
];

const diagnosticOptions = [
  ["old-leads", "We have old leads sitting unused", "dead-leads"],
  ["messy-workflow", "Our workflow is messy", "workflow"],
  ["missed-handoffs", "Our team misses handoffs", "workflow"],
  ["chasing-updates", "We waste time chasing updates", "workflow"],
  ["follow-up", "We need better follow-up", "dead-leads"],
  ["document-process", "We need one process documented properly", "workflow"],
];

const funnelMetrics = {
  workflow: [
    ["Workflow phases mapped", "5"],
    ["Procedures generated", "9"],
    ["AI workers assigned", "3"],
    ["Review gates active", "4"],
    ["Automation score", "74%"],
    ["Awaiting approval", "2"],
  ],
  "dead-leads": [
    ["Leads uploaded", "1,000"],
    ["Valid contacts", "812"],
    ["Messages sent", "812"],
    ["Replies", "74"],
    ["Positive replies", "21"],
    ["Booked calls", "8"],
    ["Voice Worker calls", "14"],
    ["Recovered revenue", "$18.4k"],
  ],
};

const funnelFlows = {
  workflow: ["Source Docs", "Workflow Map", "Procedures", "Workers", "Review Gates", "Export Pack"],
  "dead-leads": ["Lead CSV", "Consent Review", "SMS Approval", "Reply Inbox", "Voice Worker", "Booking Tracker", "Revenue Attribution"],
};

const precisionModules = [
  {
    key: "workflow-map",
    label: "Workflow Map",
    status: "mapped",
    line: "5 phases detected",
    preview: {
      title: "Workflow Map",
      eyebrow: "Operating pack builder",
      summary: "Quote Follow-Up OS generated from uploaded SOP notes.",
      flow: ["Source Docs", "Intake", "Map", "Procedures", "Review", "Deploy"],
      metrics: [["5", "phases mapped"], ["3", "handoffs found"], ["2", "review gates required"]],
      cards: [["Output", "Trigger, owners, phases and handoffs are now visible."], ["Next step", "Procedure Builder prepares operating instructions."]],
      cta: "View full workflow",
    },
  },
  {
    key: "sop-upload",
    label: "SOP Upload",
    status: "parsed",
    line: "source ready",
    preview: {
      title: "SOP Upload",
      eyebrow: "Source extraction",
      summary: "Messy inputs become usable source material for agent build steps.",
      flow: ["SOP.pdf", "Loom transcript", "Client checklist"],
      metrics: [["parsed", "source status"], ["6", "workflow candidates"], ["3", "missing answers"]],
      cards: [["Extraction", "source parsed"], ["Detection", "workflow candidates found"], ["Blockers", "missing info detected"]],
      cta: "Upload source",
    },
  },
  {
    key: "ai-workers",
    label: "AI Workers",
    status: "drafted",
    line: "3 roles designed",
    preview: {
      title: "AI Workers",
      eyebrow: "Controlled role design",
      summary: "Workers receive clear permissions, output formats and review rules.",
      flow: ["Intake Worker", "Procedure Builder", "QA Worker"],
      metrics: [["3", "worker cards"], ["yes", "review required"], ["0", "ungated actions"]],
      cards: [["Intake Worker", "Allowed: summarise inputs. Restricted: pricing promises."], ["Procedure Builder", "Allowed: draft procedures. Restricted: final approval."], ["QA Worker", "Allowed: flag risk. Restricted: client send."]],
      cta: "Inspect workers",
    },
  },
  {
    key: "review-gates",
    label: "Review Gates",
    status: "required",
    line: "human gate active",
    preview: {
      title: "Review Gates",
      eyebrow: "Approval control",
      summary: "Human review stays in place before risky or client-facing work leaves the system.",
      flow: ["Draft", "Risk check", "Approval", "Launch"],
      metrics: [["3", "queue items"], ["1", "low confidence flag"], ["yes", "launch blocked"]],
      cards: [["SMS campaign approval", "Waiting on consent confirmation."], ["Client-facing template review", "Tone and offer checked before send."], ["Low-confidence output flagged", "Human operator must approve or revise."]],
      cta: "Open review gate",
    },
  },
  {
    key: "dead-lead-recovery",
    label: "Dead Lead Recovery",
    status: "queued",
    line: "812 valid contacts",
    preview: {
      title: "Dead Lead Recovery",
      eyebrow: "Revenue recovery OS",
      summary: "Old enquiries are cleaned, gated, messaged and tracked through bookings.",
      flow: ["Lead CSV", "Consent Review", "SMS", "Reply Inbox", "Voice Worker", "Bookings"],
      metrics: [["1,000", "leads uploaded"], ["812", "valid contacts"], ["74", "replies"], ["21", "positive replies"], ["8", "booked calls"]],
      cards: [["Campaign plan", "Short approval-gated SMS with opt-out and reply rules."], ["Revenue path", "Replies, calls, bookings and closed revenue are attributed."]],
      cta: "Load sample campaign",
    },
  },
  {
    key: "voice-worker",
    label: "Voice Worker",
    status: "pending",
    line: "calls gated",
    preview: {
      title: "Voice Worker",
      eyebrow: "Qualified call follow-up",
      summary: "Positive replies move into a controlled call queue after campaign approval.",
      flow: ["Reply", "Classify", "Queue", "Call", "Summary", "Booking"],
      metrics: [["3", "priority calls"], ["1", "booking made"], ["yes", "approval gate"]],
      cards: [["Sarah M", "interested - call pending"], ["John R", "callback requested"], ["Emily T", "booked"], ["Call summary", "Lead asked for quote timing and prefers Thursday afternoon."]],
      cta: "Review call queue",
    },
  },
  {
    key: "automation-score",
    label: "Automation Score",
    status: "72%",
    line: "readiness scored",
    preview: {
      title: "Automation Score",
      eyebrow: "Readiness and risk",
      summary: "Precision OS scores what can run, what needs approval and what needs a client answer.",
      flow: ["Assess", "Score", "Gate", "Route"],
      metrics: [["72%", "automation readiness"], ["medium", "risk level"], ["yes", "human review required"]],
      cards: [["Automatable", "4 steps can be automated"], ["Needs approval", "2 steps need approval"], ["Client answer", "1 step needs client answer"]],
      cta: "Check readiness",
    },
  },
  {
    key: "client-handoff",
    label: "Client Handoff",
    status: "ready",
    line: "pack generated",
    preview: {
      title: "Client Handoff",
      eyebrow: "Delivery pack",
      summary: "The client receives the system, not just an explanation of the system.",
      flow: ["Summary", "Procedures", "Templates", "Worker cards", "Next actions"],
      metrics: [["ready", "client status"], ["5", "pack sections"], ["1", "handover summary"]],
      cards: [["Handoff pack", "workflow summary, procedures, templates, worker cards and next actions."], ["Status", "Client ready."]],
      cta: "Preview handoff",
    },
  },
  {
    key: "revenue-tracking",
    label: "Revenue Tracking",
    status: "attributed",
    line: "$18.4k tracked",
    preview: {
      title: "Revenue Tracking",
      eyebrow: "Attribution layer",
      summary: "Recovered work is tracked from lead upload to booked calls, quoted deals and revenue.",
      flow: ["lead uploaded", "SMS reply", "call", "booking", "closed won"],
      metrics: [["8", "booked calls"], ["5", "quoted deals"], ["$18.4k", "closed revenue"], ["active", "performance status"]],
      cards: [["Performance", "Attribution events connect campaign actions to recovered revenue."], ["Next action", "Review positive replies and update deal status."]],
      cta: "View revenue path",
    },
  },
  {
    key: "agent-command-centre",
    label: "Agent Command Centre",
    status: "internal",
    line: "QA pipeline live",
    preview: {
      title: "Agent Command Centre",
      eyebrow: "Internal delivery control",
      summary: "Client delivery moves through intake, build, QA, client-ready delivery and expansion logging.",
      flow: ["New submission", "Intake", "In build", "Needs QA", "Client ready", "Delivered"],
      metrics: [["complete", "Intake Agent"], ["running", "Workflow Mapping"], ["pending", "QA"]],
      cards: [["Agent queue", "Intake Agent complete"], ["Build state", "Workflow Mapping running"], ["Review gate", "QA pending"]],
      cta: "Open command layer",
    },
  },
];

const deliveryStages = [
  "New submission",
  "Intake review",
  "Missing info",
  "Ready for build",
  "In build",
  "Needs QA",
  "Changes required",
  "Client ready",
  "Delivered",
  "Expansion opportunity",
];

const internalAgents = [
  {
    type: "Intake Agent",
    status: "active",
    queue: 6,
    role: "Owns the first client submission and confirms fit, path, risk and missing information.",
    inputs: ["funnel form", "selected offer", "client details", "payment status", "uploaded files", "notes"],
    outputs: ["client brief", "recommended delivery path", "missing info list", "risk notes", "workspace setup checklist"],
    checklist: ["Offer type confirmed", "Workspace created", "Missing info logged", "Next action assigned"],
    escalation: "Escalate if offer fit, payment status, consent source or scope is unclear.",
  },
  {
    type: "Workflow Mapping Agent",
    status: "building",
    queue: 4,
    role: "Builds the workflow map for Guided Workflow Sprint clients from SOPs, Looms, docs and notes.",
    inputs: ["uploaded SOPs", "workflow discovery answers", "current tools", "client notes", "current output examples"],
    outputs: ["workflow map", "phase list", "step list", "process gaps", "missing questions", "readiness score draft"],
    checklist: ["Trigger mapped", "Phases mapped", "Owners assigned", "Inputs and outputs captured", "Handoffs visible"],
    escalation: "Escalate if trigger, final outcome, owner or handoff cannot be inferred.",
  },
  {
    type: "Procedure Builder Agent",
    status: "active",
    queue: 5,
    role: "Turns mapped workflows into procedures, checklists, templates, handover notes and operating packs.",
    inputs: ["workflow map", "phase list", "client answers", "existing templates", "brand notes"],
    outputs: ["procedures", "checklists", "templates", "handover notes", "exportable operating pack"],
    checklist: ["Major phases covered", "Templates structured", "Checklists practical", "Handover notes ready"],
    escalation: "Escalate if a procedure depends on missing client decisions or unsupported tools.",
  },
  {
    type: "Worker Design Agent",
    status: "reviewing",
    queue: 3,
    role: "Designs controlled AI workers with role, purpose, permissions, limits and review rules.",
    inputs: ["workflow map", "procedures", "risk notes", "AI permission boundaries"],
    outputs: ["worker cards", "allowed tasks", "restricted tasks", "review gates", "automation readiness score"],
    checklist: ["Clear worker job", "No unlimited permissions", "Risky actions gated", "Output format defined"],
    escalation: "Escalate if a worker would need judgement, credentials or client-facing autonomy without approval.",
  },
  {
    type: "Dead Lead Reactivation Agent",
    status: "active",
    queue: 7,
    role: "Sets up Dead Lead Reactivation OS campaigns from CSV/CRM exports, consent notes and booking rules.",
    inputs: ["lead CSV", "industry", "offer details", "deal value", "source notes", "opt-out list", "booking rules", "Voice Worker prompt"],
    outputs: ["clean lead list", "excluded contacts", "campaign plan", "risk flags", "SMS draft", "reply categories", "Voice Worker queue"],
    checklist: ["Contacts cleaned", "Risky contacts excluded", "SMS draft ready", "Campaign held for approval"],
    escalation: "Escalate if consent/source is missing, opt-out risk is high or follow-up owner is undefined.",
  },
  {
    type: "QA / Review Gate Agent",
    status: "blocking",
    queue: 9,
    role: "Protects the Precision OS brand before outputs reach the client.",
    inputs: ["agent outputs", "package scope", "client brief", "risk notes", "workflow/campaign assets"],
    outputs: ["approved pack", "changes required", "QA notes", "client-ready summary", "handover Loom outline"],
    checklist: ["Output client-ready", "Risks flagged", "Scope creep identified", "Human approval recorded"],
    escalation: "Escalate if output is out of scope, risky, hallucinated or missing a client answer.",
  },
];

const deliveryWorkspaces = [
  ["Northstar Advisory", "Workflow Sprint", "In build", "Workflow Mapping Agent", "2 missing answers", "Needs QA tomorrow", "Client onboarding can expand to reporting"],
  ["Atlas Roofing Co", "Dead Lead Reactivation", "Intake review", "Intake Agent", "Consent/source history", "High deal value", "Quote follow-up OS likely"],
  ["Bright Desk Recruiting", "Workflow Sprint", "Client ready", "QA / Review Gate Agent", "None", "Handover summary ready", "Screening workflow expansion"],
  ["Motive Ecommerce", "Dead Lead Reactivation", "Needs QA", "Dead Lead Reactivation Agent", "Opt-out column", "SMS draft blocked", "Support escalation OS likely"],
];

const agentQueue = [
  ["Review funnel submission", "Atlas Roofing Co", "Intake Agent", "urgent", "Today", "in progress", "funnel form", "client brief", "Consent/source history missing", "yes"],
  ["Map onboarding phases", "Northstar Advisory", "Workflow Mapping Agent", "high", "Tomorrow", "in progress", "SOP + Loom", "workflow_map", "Waiting on tool list", "yes"],
  ["Draft SMS campaign", "Motive Ecommerce", "Dead Lead Reactivation Agent", "high", "Today", "needs human", "CRM export", "sms_draft", "Opt-out column missing", "yes"],
  ["QA operating pack", "Bright Desk Recruiting", "QA / Review Gate Agent", "normal", "Friday", "needs QA", "workflow pack", "qa_report", "No blocker", "yes"],
  ["Design follow-up worker", "Northstar Advisory", "Worker Design Agent", "normal", "Friday", "queued", "phase list", "ai_worker_card", "No blocker", "yes"],
];

const agentRunEngine = [
  ["Run Intake Agent", "Collect form, payment state, uploaded files and fit signals.", "Creates client brief, missing info, delivery path and first build task.", "Auto-continue if fit confidence is above 80% and no critical blocker."],
  ["Run Workflow Mapping Agent", "Reads uploaded SOPs, Looms, process notes and current tools.", "Creates workflow map, phase list, process gaps and readiness draft.", "Routes to Procedure Builder when trigger, phases and owners exist."],
  ["Run Procedure Builder Agent", "Uses approved map, client answers and existing templates.", "Creates procedures, checklists, templates and operating pack structure.", "Routes to Worker Design when major phases have usable procedures."],
  ["Run Worker Design Agent", "Uses workflow map, procedures, risks and AI permission boundaries.", "Creates worker cards, permissions, output formats and review gates.", "Routes to QA when risky actions are gated."],
  ["Run Dead Lead Reactivation Agent", "Reads lead CSV, consent notes, booking rules and offer details.", "Creates clean lead summary, exclusions, campaign plan, SMS draft and reply rules.", "Routes to QA before any send or Voice Worker call."],
  ["Run QA Agent", "Checks scope, hallucination risk, copy quality, gates and missing questions.", "Approves, requests changes, marks client-ready or creates change tasks.", "Routes to client approval portal when passed."],
];

const deliveryRules = [
  ["Workflow Sprint", "Docs uploaded", "Run Workflow Mapping Agent"],
  ["Workflow Sprint", "Workflow map complete", "Run Procedure Builder Agent"],
  ["Workflow Sprint", "Procedures complete", "Run Worker Design Agent"],
  ["Workflow Sprint", "All outputs complete", "Send to QA"],
  ["Dead Lead Reactivation", "Lead CSV uploaded", "Run Dead Lead Reactivation Agent"],
  ["Dead Lead Reactivation", "Campaign assets ready", "Send campaign plan to QA"],
  ["QA", "QA passes", "Mark client ready"],
  ["QA", "QA fails", "Create change task"],
];

const reviewGateRules = [
  "client-facing output",
  "campaign before SMS send",
  "Voice Worker before calls",
  "unclear consent",
  "missing info",
  "high-risk claim",
  "out-of-scope request",
  "low confidence output",
  "success/performance fee dispute",
];

const clientApprovalItems = [
  ["Perth Trade Co", "Your Workflow Sprint is ready for review", "workflow pack", "Approve workflow map, answer missing questions, mark client-facing SMS as human-controlled."],
  ["Renovation Company", "Your Dead Lead Campaign is ready for approval", "campaign approval", "Approve SMS copy, confirm consent/source notes, confirm booking rules before launch."],
];

const usageControlRows = [
  ["agent_run", "Intake Agent", "Perth Trade Co", "$0.42", "included", "no"],
  ["agent_run", "Workflow Mapping Agent", "Perth Trade Co", "$1.86", "included", "yes"],
  ["agent_run", "Dead Lead Reactivation Agent", "Renovation Company", "$2.14", "included", "yes"],
  ["worker_run", "Voice Worker queue setup", "Renovation Company", "$0.78", "usage", "yes"],
  ["review_round", "QA Agent", "Renovation Company", "$0.35", "included", "yes"],
];

const executionInspectorRows = [
  ["Validation", "valid JSON", "schema checked before save"],
  ["Usage estimate", "1,920 tokens", "saved to usage ledger"],
  ["Next routed agent", "QA / Review Gate Agent", "created when output is ready"],
  ["Approval item", "campaign approval", "created before client-facing send"],
  ["Missing info", "2 open questions", "client blockers stay visible"],
  ["QA status", "needs_human_review", "human gate remains active"],
];

const structuredJsonPreview = {
  workflow_name: "Quote Follow-Up OS",
  trigger: "Quote sent and no decision received",
  phases: ["Quote sent", "Day 1 check-in", "Day 3 value follow-up", "Day 7 escalation"],
  owners: ["Estimator", "Admin coordinator"],
  missing_questions: ["Who owns follow-up after day 3?", "What is the exact SMS timing sequence?"],
  automation_readiness_score: 78,
  review_gates_needed: ["client-facing SMS copy", "high-value quote escalation"],
};

const demoDeliveryPipeline = {
  workspaces: [
    ["Perth Trade Co", "Guided Workflow Sprint", "In build", "Workflow Mapping Agent", "Clarify quote owner and follow-up timing", "Workflow map draft needs QA after mapping", "Active Lead Follow-Up OS"],
    ["Renovation Company", "Dead Lead Reactivation OS", "Needs QA", "Dead Lead Reactivation Agent", "Consent review required", "SMS draft and risk flags awaiting QA", "Sales Pipeline OS"],
  ],
  queue: [
    ["Intake complete", "Perth Trade Co", "Intake Agent", "normal", "Complete", "approved", "funnel form, quote process notes", "client_brief", "No blocker", "yes"],
    ["Map Quote Follow-Up OS", "Perth Trade Co", "Workflow Mapping Agent", "high", "Today", "in progress", "quote notes, SMS examples, sales checklist", "workflow_map", "Clarify quote owner", "yes"],
    ["Build quote follow-up procedures", "Perth Trade Co", "Procedure Builder Agent", "normal", "Tomorrow", "queued", "draft workflow map", "procedure", "Waiting on mapping", "yes"],
    ["Design Follow-Up Worker card", "Perth Trade Co", "Worker Design Agent", "normal", "Tomorrow", "queued", "workflow phases", "ai_worker_card", "Waiting on mapping", "yes"],
    ["QA Quote Follow-Up OS pack", "Perth Trade Co", "QA / Review Gate Agent", "normal", "Friday", "queued", "workflow map + worker cards", "qa_report", "Pending build outputs", "yes"],
    ["Intake complete", "Renovation Company", "Intake Agent", "normal", "Complete", "approved", "funnel form, CRM export", "client_brief", "No blocker", "yes"],
    ["Clean old lead list", "Renovation Company", "Dead Lead Reactivation Agent", "urgent", "Today", "needs QA", "1,000 lead CSV", "clean_lead_list", "Consent review required", "yes"],
    ["Prepare campaign plan", "Renovation Company", "Dead Lead Reactivation Agent", "urgent", "Today", "needs QA", "clean lead summary", "campaign_plan", "SMS not approved", "yes"],
    ["QA reactivation launch pack", "Renovation Company", "QA / Review Gate Agent", "high", "Today", "needs QA", "risk flags, SMS draft, reply rules", "qa_report", "Consent review required", "yes"],
  ],
  missingInfo: [
    ["Perth Trade Co", "Who owns quote follow-up after day 3?", "Needed to assign owner and escalation rule.", "high", "single role name"],
    ["Perth Trade Co", "What is the exact SMS timing sequence?", "Needed to finalise the procedure and worker limits.", "normal", "day-by-day timing"],
    ["Renovation Company", "Can you confirm source/consent history for the CSV?", "Needed before SMS approval or campaign launch.", "urgent", "source notes or CRM export column"],
    ["Renovation Company", "Who handles booked quote calls?", "Needed before positive replies enter Voice Worker follow-up.", "high", "name or team role"],
  ],
  outputs: [
    ["Perth Trade Co", "workflow_map", "Draft Quote Follow-Up OS map", "Trigger, phases, owners and handoffs mapped for quote follow-up.", "needs_review", "Workflow Mapping Agent"],
    ["Perth Trade Co", "missing_info_list", "Quote follow-up missing info", "Two questions blocking procedure finalisation.", "open", "Intake Agent"],
    ["Perth Trade Co", "automation_readiness", "Initial readiness score", "Quote follow-up readiness scored at 78 with human approval on client-facing SMS.", "draft", "Worker Design Agent"],
    ["Renovation Company", "clean_lead_list", "Clean lead summary", "1,000 uploaded, 812 valid, 74 risky, 51 duplicates, 63 missing phone.", "needs_review", "Dead Lead Reactivation Agent"],
    ["Renovation Company", "campaign_plan", "Dead lead reactivation campaign plan", "Short SMS campaign with reply categories and Voice Worker queue pending approval.", "needs_review", "Dead Lead Reactivation Agent"],
    ["Renovation Company", "sms_draft", "Two-line SMS draft", "Draft ready, held behind consent and client approval gates.", "needs_review", "Dead Lead Reactivation Agent"],
    ["Renovation Company", "reply_classification_rules", "Reply categories", "Interested, not now, wrong person, opt out, needs human review.", "draft", "Dead Lead Reactivation Agent"],
    ["Renovation Company", "voice_worker_queue", "Voice Worker queue setup", "Positive replies queued only after campaign approval.", "blocked", "Dead Lead Reactivation Agent"],
  ],
  qa: [
    ["Perth Trade Co", "Draft workflow map", "changes required", "Add owner for day-3 follow-up before client-ready handover."],
    ["Renovation Company", "SMS draft", "blocked by missing info", "Consent/source history required before campaign approval."],
    ["Renovation Company", "Clean lead summary", "approved", "Risky, duplicate and missing-phone contacts are separated."],
  ],
  expansion: [
    ["Perth Trade Co", "Active Lead Follow-Up OS", "Quote workflow reveals live lead follow-up gaps after first-contact stage.", "$3,000", "log for delivered handover"],
    ["Renovation Company", "Sales Pipeline OS", "Recovered bookings need tracked pipeline stage ownership and quote follow-up.", "$3,000+", "offer after first campaign report"],
  ],
};

const connectedAppCategories = [
  ["CRM", ["HubSpot", "Salesforce", "Pipedrive", "GoHighLevel"]],
  ["Documents", ["Notion", "Google Drive", "Dropbox", "OneDrive"]],
  ["Email", ["Gmail", "Outlook"]],
  ["Calendar", ["Google Calendar", "Outlook Calendar", "Calendly"]],
  ["Project Management", ["Monday.com", "ClickUp", "Asana", "Trello", "Linear"]],
  ["Communication", ["Slack", "Microsoft Teams"]],
  ["Forms", ["Typeform", "Tally", "Jotform", "Google Forms"]],
  ["Spreadsheets", ["Google Sheets", "Airtable", "Excel"]],
  ["Payments", ["Stripe", "PayPal", "Square", "Xero"]],
  ["Ecommerce", ["Shopify", "WooCommerce"]],
  ["Automation Bridges", ["Zapier", "Make", "n8n"]],
];

const simpleIconSlugs = {
  "HubSpot": "hubspot",
  "Salesforce": "salesforce",
  "Pipedrive": "pipedrive",
  "GoHighLevel": "highlevel",
  "Notion": "notion",
  "Google Drive": "googledrive",
  "Dropbox": "dropbox",
  "OneDrive": "microsoftonedrive",
  "Gmail": "gmail",
  "Outlook": "microsoftoutlook",
  "Google Calendar": "googlecalendar",
  "Outlook Calendar": "microsoftoutlook",
  "Calendly": "calendly",
  "Monday.com": "mondaydotcom",
  "ClickUp": "clickup",
  "Asana": "asana",
  "Trello": "trello",
  "Linear": "linear",
  "Slack": "slack",
  "Microsoft Teams": "microsoftteams",
  "Typeform": "typeform",
  "Tally": "tally",
  "Jotform": "jotform",
  "Google Forms": "googleforms",
  "Google Sheets": "googlesheets",
  "Airtable": "airtable",
  "Excel": "microsoftexcel",
  "Stripe": "stripe",
  "PayPal": "paypal",
  "Square": "square",
  "Xero": "xero",
  "Shopify": "shopify",
  "WooCommerce": "woocommerce",
  "Zapier": "zapier",
  "Make": "make",
  "n8n": "n8n",
};

const localLogoApps = {
  "Outlook": "outlook",
  "Outlook Calendar": "outlook",
  "OneDrive": "microsoft",
  "Microsoft Teams": "teams",
  "Excel": "excel",
  "Slack": "slack",
  "Tally": "tally",
  "Monday.com": "monday",
};

const flowSteps = [
  ["Capture Work", "forms, docs, calls, notes"],
  ["Workflow Map", "roles, handoffs, gaps"],
  ["Procedures", "steps, QA, checklists"],
  ["AI Workers", "tasks, tools, limits"],
  ["Review Gates", "risk approvals"],
  ["Operating System", "export, run, improve"],
];

const industries = [
  {
    name: "Marketing Agencies",
    problem: "Client onboarding, campaign setup, reporting, and follow-ups are messy.",
    copy: "Turn delivery into a repeatable system. Every client follows the same workflow, your team knows what happens next, and AI workers can draft briefs, reports, follow-ups, and task lists for review.",
    flow: ["New client onboarded", "Assets collected", "Campaign checklist", "Tasks assigned", "Report drafted", "Human review", "Client update sent"],
  },
  {
    name: "Recruitment Agencies",
    problem: "Candidate screening, job briefs, client updates, and interview coordination take too much admin time.",
    copy: "Standardise job intake, candidate screening, shortlist preparation, client updates, and interview coordination so recruiters spend less time on admin and more time placing candidates.",
    flow: ["New job brief", "Criteria created", "Screening checklist", "Shortlist drafted", "Interview workflow", "Client update prepared"],
  },
  {
    name: "Trades & Local Services",
    problem: "Enquiries arrive from calls, texts, websites, and social channels, then jobs get missed or quoted inconsistently.",
    copy: "Capture job details, create quote checklists, trigger follow-ups, organise customer communication, and make sure no lead gets lost.",
    flow: ["New enquiry", "Job details captured", "Lead qualified", "Quote checklist", "Follow-up reminder", "Review request sent"],
  },
  {
    name: "Finance Brokers",
    problem: "Client document collection, pre-assessment notes, status updates, and follow-ups are repetitive.",
    copy: "Organise client intake, document collection, scenario notes, follow-up sequences, and application tracking while keeping human review in control of client-facing advice.",
    flow: ["New client enquiry", "Situation captured", "Document checklist", "Notes summarised", "Follow-up workflow", "Status tracked"],
  },
  {
    name: "Consultants & Coaches",
    problem: "The same process is delivered manually to every client.",
    copy: "Turn frameworks, playbooks, and client delivery processes into repeatable workflows, templates, checklists, and AI-assisted client materials.",
    flow: ["New client", "Discovery workflow", "Strategy template", "Weekly action plan", "Progress check-in", "Client report"],
  },
  {
    name: "Ecommerce Teams",
    problem: "Product launches, customer support, supplier follow-ups, and content workflows are scattered.",
    copy: "Systemise product launches, supplier communication, customer support, content production, and fulfilment workflows so repeatable work is easier to train, track, and improve.",
    flow: ["New product idea", "Supplier checklist", "Product page draft", "Launch content plan", "Inventory tasks", "Support macros"],
  },
  {
    name: "Accounting Firms",
    problem: "Client onboarding, monthly document chasing, reconciliations, and reporting are repetitive.",
    copy: "Create structured systems for onboarding, monthly compliance, document collection, report preparation, and review steps. AI can prepare admin-heavy drafts while humans retain final approval.",
    flow: ["New client", "Document request", "Monthly schedule", "Missing info follow-up", "Report draft", "Partner review"],
  },
  {
    name: "Legal Admin Teams",
    problem: "Intake, document collection, matter updates, and internal checklists are manual.",
    copy: "Use Precision OS for operational workflows such as client intake, document collection, matter checklists, internal task tracking, and client update drafts. Sensitive outputs remain human-reviewed before anything is sent.",
    flow: ["New matter", "Intake checklist", "Required documents", "Internal task list", "Draft client update", "Lawyer review"],
  },
  {
    name: "Project Teams",
    problem: "Supplier follow-ups, task ownership, change tracking, and handovers are hard to keep consistent.",
    copy: "Organise repeatable admin workflows across project setup, supplier coordination, change tracking, client updates, and handover checklists.",
    flow: ["New project", "Scope checklist", "Supplier tasks", "Change log", "Client update", "Handover checklist"],
  },
  {
    name: "Startups",
    problem: "Founders keep everything in their head and nothing is documented.",
    copy: "Build an operating system from day one. Precision OS turns key processes into clear workflows, procedures, templates, and review systems the team can actually follow.",
    flow: ["Founder process", "Workflow map", "Team roles", "Procedures", "Templates", "AI workers"],
  },
];

const readiness = [
  ["CRM update", 92, "Ready"],
  ["Client follow-up", 84, "Ready"],
  ["Proposal draft", 71, "Assist"],
  ["Document collection", 66, "Assist"],
  ["Compliance review", 43, "Controlled"],
  ["Final approval", 24, "Manual"],
];

const activity = [
  ["7m", "Client Onboarding OS generated 12 procedures from a captured playbook."],
  ["18m", "Review gate added to compliance approval step."],
  ["31m", "Client follow-up worker scored 84 automation readiness."],
  ["1h", "Template pack exported as Markdown, PDF, and skill folder."],
];

let activeView = "funnel";
let activeDemo = 0;
let activeDashboard = "Dashboard";
let activeAdminSection = "Agent Command Centre";
let activeBoardSection = "Overview";
let activeBoardContext = "precision_os";
let activeMapNode = 0;
let selectedFunnelPath = "workflow";
let diagnosticChoice = "";
let activeFunnelTab = "workflow";
let activeFunnelModule = "workflow-map";
let formPath = "dead-leads";
let funnelFormSubmitted = false;
let authMode = "login";
let authDraft = {
  login: { email: "", password: "" },
  signup: { email: "", password: "", workspace_name: "", industry: "" },
};
let deliverySimulationLoaded = false;
let agentRunLog = [];
let adminStatus = { state: "idle", message: "Sign in as a workspace owner/admin to open the delivery control panel." };
let session = JSON.parse(localStorage.getItem("precision_os_session") || "null");
let workspace = JSON.parse(localStorage.getItem("precision_os_workspace") || "null");

(function clearExpiredSession() {
  if (!session?.access_token) return;
  try {
    const payload = JSON.parse(atob(session.access_token.split(".")[1]));
    if (payload.exp && payload.exp * 1000 < Date.now()) {
      session = null; workspace = null;
      localStorage.removeItem("precision_os_session");
      localStorage.removeItem("precision_os_workspace");
    }
  } catch (e) { session = null; workspace = null; localStorage.removeItem("precision_os_session"); localStorage.removeItem("precision_os_workspace"); }
})();

(function injectAuthTabsStyle() {
  const s = document.createElement("style");
  s.textContent = ".auth-tabs button{touch-action:manipulation;-webkit-tap-highlight-color:transparent;min-height:44px}";
  document.head.appendChild(s);
})();

let backendStatus = { state: "idle", message: "Connect Supabase to activate live backend data." };
let backendData = {
  dashboard: null,
  uploads: [],
  operatingSystems: [],
  workflows: [],
  phases: [],
  procedures: [],
  workers: [],
  workerRuns: [],
  templates: [],
  reviewGates: [],
  integrations: [],
  appConnections: [],
  agentCommandCentre: null,
};

function canAccessAdmin() {
  return Boolean(session?.access_token && workspace && ["owner", "admin"].includes(workspace.role));
}

function agentTypeFromRunLabel(label = "") {
  return String(label).replace(/^Run\s+/i, "").trim();
}

function escapeAttr(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function syncViewFromPath() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/login") {
    activeView = "auth";
    authMode = "login";
    return;
  }
  if (path === "/signup") {
    activeView = "auth";
    authMode = "signup";
    return;
  }
  if (path === "/dashboard") {
    activeView = session?.access_token ? "dashboard" : "auth";
    authMode = session?.access_token ? authMode : "login";
    return;
  }
  if (path === "/admin") {
    activeView = "admin";
    authMode = "login";
    return;
  }
  if (path === "/platform") {
    activeView = "landing";
    return;
  }
  if (path === "/funnel") {
    activeView = "funnel";
    return;
  }
  // Default: precision-os.netlify.app root goes to dashboard (or login if not authenticated)
  activeView = session?.access_token ? "dashboard" : "auth";
  authMode = "login";
}

function routeForState() {
  if (activeView === "auth") return authMode === "signup" ? "/signup" : "/login";
  if (activeView === "dashboard") return session?.access_token ? "/dashboard" : "/login";
  if (activeView === "admin") return "/admin";
  if (activeView === "landing") return "/platform";
  if (activeView === "funnel") return "/funnel";
  return "/dashboard";
}

function updateBrowserPath() {
  const nextPath = routeForState();
  if (window.location.pathname !== nextPath) {
    window.history.replaceState({ activeView, authMode }, "", nextPath);
  }
}

function button(label, variant = "primary", attrs = "") {
  return `<button class="btn ${variant}" ${attrs}><span>${label}</span><span class="btn-mark" aria-hidden="true">→</span></button>`;
}

async function apiRequest(path, options = {}) {
  const headers = { "content-type": "application/json", ...(options.headers || {}) };
  if (session?.access_token) headers.authorization = `Bearer ${session.access_token}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);
  try {
    const res = await fetch(`/api${path}`, { ...options, headers, signal: controller.signal });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const message = data.message || data.error || `Request failed: ${res.status}`;
      throw new Error(message);
    }
    return data;
  } finally {
    clearTimeout(timeout);
  }
}

function saveSession(nextSession) {
  session = nextSession;
  localStorage.setItem("precision_os_session", JSON.stringify(nextSession));
}

function saveWorkspace(nextWorkspace) {
  workspace = nextWorkspace;
  localStorage.setItem("precision_os_workspace", JSON.stringify(nextWorkspace));
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1] || "");
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

async function refreshBackendData() {
  if (!session?.access_token) return;
  const viewAtStart = activeView;
  backendStatus = { state: "loading", message: "Loading workspace data..." };
  render();
  try {
    const workspaces = await apiRequest("/workspaces");
    if (!workspace && workspaces.length) saveWorkspace(workspaces[0]);
    if (workspace && workspaces.length) {
      const currentWorkspace = workspaces.find(item => item.id === workspace.id) || workspaces[0];
      saveWorkspace(currentWorkspace);
    }
    if (!workspace) {
      backendStatus = { state: "ready", message: "Create a workspace to start capturing process knowledge." };
      render();
      return;
    }
    const workspaceQuery = `?workspace_id=${encodeURIComponent(workspace.id)}`;
    const _results = await Promise.allSettled([
      apiRequest(`/dashboard${workspaceQuery}`),
      apiRequest(`/uploads${workspaceQuery}`),
      apiRequest(`/operating-systems${workspaceQuery}`),
      apiRequest(`/workflows${workspaceQuery}`),
      apiRequest(`/workflow-phases${workspaceQuery}`),
      apiRequest(`/procedures${workspaceQuery}`),
      apiRequest(`/workers${workspaceQuery}`),
      apiRequest(`/worker-runs${workspaceQuery}`),
      apiRequest(`/templates${workspaceQuery}`),
      apiRequest(`/review-gates${workspaceQuery}`),
      apiRequest(`/integrations${workspaceQuery}`),
      ["owner", "admin"].includes(workspace.role) ? apiRequest(`/agent-command-centre${workspaceQuery}`) : Promise.resolve(null),
    ]);
    const _defaults = [{}, [], [], [], [], [], [], [], [], [], [], null];
    const [
      dashboard,
      uploads,
      operatingSystems,
      workflows,
      phases,
      procedures,
      workers,
      workerRuns,
      templates,
      reviewGates,
      integrations,
      agentCommandCentre,
    ] = _results.map((r, i) => r.status === "fulfilled" ? r.value : _defaults[i]);
    const appConnections = workflows[0]?.id ? await apiRequest(`/workflows/${workflows[0].id}/app-connections${workspaceQuery}`) : [];
    backendData = { dashboard, uploads, operatingSystems, workflows, phases, procedures, workers, workerRuns, templates, reviewGates, integrations, appConnections, agentCommandCentre };
    backendStatus = { state: "ready", message: `Live workspace connected: ${workspace.name}` };
  } catch (error) {
    backendStatus = { state: "error", message: error.message };
  }
  if (activeView === viewAtStart) render();
}

function funnel() {
  const selectedOption = funnelOptions.find(option => option.key === selectedFunnelPath) || funnelOptions[0];
  return `
    <header class="landing-nav funnel-nav">
      <a class="brand" href="#" data-view="funnel">${brandLockup}</a>
      <nav aria-label="Funnel navigation">
        <a href="#" data-view="landing">Platform</a>
        <a href="#choose" data-funnel-scroll="#choose">Offers</a>
        <a href="#system-preview" data-funnel-scroll="#system-preview">How It Works</a>
        <a href="#compare" data-funnel-scroll="#compare">Pricing</a>
        <a href="#" data-view="landing" data-scroll-target="#faq">FAQ</a>
      </nav>
      <div class="nav-auth">
        ${session?.access_token
          ? `<button class="btn primary compact" data-view="dashboard"><span>Dashboard</span><span class="btn-mark">→</span></button>`
          : `<a class="nav-login" href="#" data-view="auth">Login</a>
             ${button(selectedOption.cta, "primary compact", `data-funnel-scroll="#start" data-track="pricing_cta_clicked"`)}`}
      </div>
    </header>

    <main class="funnel-page">
      <aside class="funnel-progress-rail" aria-label="Funnel progress">
        ${[
          ["choose", "Choose path"],
          ["system-preview", "Preview system"],
          ["compare", "Compare offers"],
          ["start", "Start"],
        ].map(([id, label], index) => `<a href="#${id}" data-funnel-scroll="#${id}"><span>${index + 1}</span>${label}</a>`).join("")}
      </aside>

      <section class="funnel-hero section" id="choose">
        <div class="funnel-hero-copy reveal">
          <p class="signal">Precision OS command layer</p>
          <h1>Turn messy business knowledge into a working operating system.</h1>
          <p class="lead">Upload SOPs, process docs, Looms or old lead data. Precision OS turns messy business knowledge into workflow maps, AI workers, review gates, templates and tracked execution systems — with precise pricing and no sales theatre.</p>
          <div class="hero-actions">
            ${button("Start One Workflow", "primary", 'data-form-path="workflow" data-funnel-scroll="#start" data-track="pricing_cta_clicked"')}
            ${button("Reactivate Old Leads", "secondary", 'data-form-path="dead-leads" data-funnel-scroll="#start" data-track="pricing_cta_clicked"')}
            ${button("View Pricing", "light", 'data-funnel-scroll="#compare" data-track="pricing_cta_clicked"')}
          </div>
          <div class="funnel-trust-strip">
            <span>Precise data</span>
            <span>Precise pricing</span>
            <span>Defined scope</span>
            <span>Written delivery</span>
            <span>Human review</span>
            <span>No nonsense</span>
          </div>
        </div>
        ${heroProductScene()}
      </section>

      <section class="section funnel-path-section">
        <div class="section-heading reveal">
          <p class="signal">Choose the first result</p>
          <h2>Start with the operating system that pays back fastest.</h2>
          <p>Pick one workflow or one old-lead recovery path. Precision OS scopes the build, produces a client-ready system and keeps review gates visible.</p>
        </div>
        <div class="funnel-selector reveal" role="list" aria-label="Choose a Precision OS path">
          ${funnelOptions.map(option => `
            <button class="funnel-path-card ${selectedFunnelPath === option.key ? "active" : ""}" data-funnel-path="${option.key}" role="listitem">
              <span>${option.label}</span>
              <strong>${option.title}</strong>
              <p>${option.summary}</p>
              <b>${option.price}</b>
              <ol>
                ${option.steps.map(step => `<li>${step}</li>`).join("")}
              </ol>
              <em>${option.cta}</em>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="section funnel-diagnostic reveal">
        <div class="diagnostic-copy">
          <p class="signal">Fast diagnostic</p>
          <h2>What do you want to fix first?</h2>
          <p>Choose the problem closest to what is happening inside the business. Precision OS will route you to the right first result.</p>
        </div>
        <div class="diagnostic-module">
          <strong>What is the bigger problem right now?</strong>
          <div class="diagnostic-chips">
            ${diagnosticOptions.map(([key, label]) => `
              <button class="${diagnosticChoice === key ? "selected" : ""}" data-diagnostic="${key}">${label}</button>
            `).join("")}
          </div>
          ${diagnosticRecommendation()}
        </div>
      </section>

      ${framerInspiredProductSections()}

      <section class="section funnel-why">
        <div class="section-heading reveal">
          <p class="signal">Why this works</p>
          <h2>Undefined work is the real bottleneck.</h2>
        </div>
        <div class="funnel-why-grid reveal">
          ${[
            ["Your knowledge is scattered", "SOPs, docs, CRMs, inboxes, spreadsheets, Looms and staff memory all hold pieces of the process."],
            ["Your tools are disconnected", "More software does not fix a process nobody has properly mapped."],
            ["Your team needs a system", "Precision OS turns the process into clear steps, owners, workers, templates and review gates."],
          ].map(([title, text]) => `<article><strong>${title}</strong><p>${text}</p></article>`).join("")}
        </div>
      </section>

      <section class="section funnel-compare" id="compare">
        <div class="section-heading reveal">
          <p class="signal">Offer comparison</p>
          <h2>Two commercial paths. One first result.</h2>
        </div>
        <div class="funnel-offer-grid reveal">
          ${funnelOfferCards()}
        </div>
      </section>

      <section class="section funnel-timeline">
        <div class="section-heading reveal">
          <p class="signal">Delivery flow</p>
          <h2>From purchase to first result.</h2>
        </div>
        <div class="timeline-switch reveal">
          <button class="${selectedFunnelPath === "workflow" ? "active" : ""}" data-funnel-path="workflow">Workflow path</button>
          <button class="${selectedFunnelPath === "dead-leads" ? "active" : ""}" data-funnel-path="dead-leads">Dead lead path</button>
        </div>
        <div class="funnel-timeline-grid reveal">
          ${(selectedFunnelPath === "dead-leads" ? [
            "Upload old leads",
            "Confirm source/consent",
            "Approve SMS",
            "Replies are classified",
            "Positive replies go to Voice Worker",
            "Calls/bookings are tracked",
            "Revenue is attributed",
            "Performance is reported",
          ] : [
            "Choose workflow",
            "Complete intake",
            "Upload docs/SOPs/Looms",
            "Precision OS maps the workflow",
            "AI drafts procedures, workers and templates",
            "Human review checks the system",
            "Client approves",
            "Workflow is deployed/exported",
          ]).map((step, index) => `<article><span>${index + 1}</span><strong>${step}</strong></article>`).join("")}
        </div>
      </section>

      <section class="section funnel-promise reveal">
        <div>
          <p class="signal">Anti-sales promise</p>
          <h2>No mystery sales process.</h2>
          <p>Precision OS shows the model, pricing, limits and scope upfront. A call is only used when it helps scope the work properly. Smaller packages can start written-first. Larger builds are scoped before anything is built.</p>
        </div>
        <ul>
          ${["No mystery pricing", "No fake urgency", "No bloated pitch deck", "No vague AI promises", "Clear scope before launch", "Human review stays in control"].map(item => `<li>${item}</li>`).join("")}
        </ul>
        ${button("View Pricing", "light", 'data-funnel-scroll="#compare" data-track="pricing_cta_clicked"')}
      </section>

      <section class="section funnel-start" id="start">
        <div class="section-heading reveal">
          <p class="signal">Start with one result</p>
          <h2>Tell us which operating system should be built first.</h2>
          <p>The form adapts to your path. After submission, the next step is the correct intake and upload route.</p>
        </div>
        ${funnelLeadForm()}
      </section>
    </main>

  `;
}

function authView() {
  if (session?.access_token) {
    activeView = "dashboard";
    return dashboard();
  }
  const isSignup = authMode === "signup";
  const draft = isSignup ? authDraft.signup : authDraft.login;
  return `
    <main class="auth-shell">
      <header class="landing-nav auth-nav">
        <a class="brand" href="#" data-view="funnel">${brandLockup}</a>
      </header>
      <section class="auth-page-card">
        <div class="auth-page-head">
          <p class="signal">${isSignup ? "Create your workspace" : "Welcome back"}</p>
          <h1>${isSignup ? "Start with Precision OS" : "Log in to Precision OS"}</h1>
          <p>${isSignup ? "Create an account and your first workspace. Defined scope, written delivery, human review." : "Access your workspace, workflow maps, AI workers and review queue."}</p>
        </div>
        <div class="auth-tabs" role="tablist">
          <button class="${!isSignup ? "active" : ""}" data-auth-mode="login" role="tab">Login</button>
          <button class="${isSignup ? "active" : ""}" data-auth-mode="signup" role="tab">Create account</button>
        </div>
        ${backendStatus.state === "error" ? `<div class="auth-error">${backendStatus.message}</div>` : ""}
        ${backendStatus.state === "loading" ? `<div class="auth-loading">${backendStatus.message}</div>` : ""}
        ${isSignup ? `
          <form class="auth-page-form" data-auth="signup">
            <input name="email" type="email" placeholder="Work email" value="${escapeAttr(draft.email)}" autocomplete="email" required />
            <input name="password" type="password" placeholder="Password (8+ characters)" value="${escapeAttr(draft.password)}" autocomplete="new-password" minlength="8" required />
            <input name="workspace_name" placeholder="Company / workspace name" value="${escapeAttr(draft.workspace_name)}" autocomplete="organization" required />
            <input name="industry" placeholder="Industry (optional)" value="${escapeAttr(draft.industry)}" />
            <button class="btn primary" type="submit" ${backendStatus.state === "loading" ? "disabled" : ""}><span>${backendStatus.state === "loading" ? "Creating workspace..." : "Create account"}</span><span class="btn-mark">→</span></button>
          </form>
        ` : `
          <form class="auth-page-form" data-auth="login">
            <input name="email" type="email" placeholder="Email" value="${escapeAttr(draft.email)}" autocomplete="email" required />
            <input name="password" type="password" placeholder="Password" value="${escapeAttr(draft.password)}" autocomplete="current-password" required />
            <button class="btn primary" type="submit" ${backendStatus.state === "loading" ? "disabled" : ""}><span>${backendStatus.state === "loading" ? "Signing in..." : "Login"}</span><span class="btn-mark">→</span></button>
          </form>
        `}
        ${authProviderButtons()}
        <p class="auth-page-alt">
          ${isSignup ? `Already have access? <a href="#" data-auth-mode="login">Login</a>` : `New to Precision OS? <a href="#" data-auth-mode="signup">Create an account</a> or <a href="#" data-view="funnel">view offers</a>.`}
        </p>
      </section>
    </main>
  `;
}

function diagnosticRecommendation() {
  const selected = diagnosticOptions.find(([key]) => key === diagnosticChoice);
  const path = selected?.[2] || selectedFunnelPath;
  const isDeadLeads = path === "dead-leads";
  return `
    <div class="diagnostic-result ${diagnosticChoice ? "ready" : ""}">
      <span>${diagnosticChoice ? "Recommendation ready" : "Select one answer"}</span>
      <strong>Recommended path: ${isDeadLeads ? "Dead Lead Reactivation OS" : "Guided Workflow Sprint"}</strong>
      <p>${isDeadLeads
        ? "Upload your old enquiries, abandoned quotes or inactive contacts. Precision OS prepares a tracked recovery campaign with SMS, Voice Worker follow-up, booked-call tracking and revenue attribution."
        : "Pick one process. Precision OS maps it, builds procedures, assigns AI workers, adds review gates and gives your team a system they can actually run."}</p>
      ${button(isDeadLeads ? "Check My Old Leads" : "Map My Workflow", "primary compact", `data-form-path="${path}" data-funnel-scroll="#start"`)}
    </div>
  `;
}

function heroProductScene() {
  return `
    <div class="hero-product-scene reveal" aria-label="Precision OS product preview">
      <div class="scene-ambient-panel scene-panel-top" aria-hidden="true"></div>
      <div class="scene-ambient-panel scene-panel-bottom" aria-hidden="true"></div>
      <div class="scene-line line-one" aria-hidden="true"><span></span></div>
      <div class="scene-line line-two" aria-hidden="true"><span></span></div>

      <section class="scene-panel workflow-scene-panel">
        <div class="scene-panel-head">
          <div><span>Operating Pack</span><strong>Quote Follow-Up OS</strong></div>
          <b>mapped</b>
        </div>
        <div class="scene-flow">
          ${["Source Docs", "Intake", "Procedures", "Workers", "Review", "Deploy"].map((step, index) => `<span class="${index < 3 ? "done" : index === 3 ? "active" : ""}">${step}</span>`).join("")}
        </div>
        <div class="scene-metrics">
          ${[["5", "phases mapped"], ["3", "handoffs found"], ["2", "review gates required"]].map(([value, label]) => `<article><strong>${value}</strong><span>${label}</span></article>`).join("")}
        </div>
        <div class="scene-progress">
          <span><i style="width:72%"></i></span>
          <em>Automation readiness 72%</em>
        </div>
      </section>

      <section class="scene-panel agent-scene-panel">
        <div class="scene-panel-head"><div><span>Agent Command Centre</span><strong>Delivery queue</strong></div><b>live</b></div>
        ${[
          ["Intake Agent", "complete", "100%"],
          ["System Build", "running", "64%"],
          ["QA Agent", "pending", "0%"],
        ].map(([name, status, progress]) => `
          <div class="scene-row">
            <strong>${name}</strong>
            <span>${status}</span>
            <i><b style="width:${progress}"></b></i>
          </div>
        `).join("")}
      </section>

      <section class="scene-panel review-scene-panel">
        <div class="scene-panel-head"><div><span>Review Gates</span><strong>Human approval</strong></div><b>3 items</b></div>
        ${["SMS campaign approval", "Client-facing template review", "Low-confidence output flagged"].map(item => `<p>${item}</p>`).join("")}
        <div class="scene-actions"><button>Approve</button><button>Request changes</button></div>
      </section>

      <section class="scene-panel deadlead-scene-panel">
        <div class="scene-panel-head"><div><span>Dead Lead Recovery</span><strong>Campaign health</strong></div><b>draft</b></div>
        <div class="scene-compact-metrics">
          ${[["1,000", "leads"], ["812", "valid"], ["74", "replies"], ["21", "positive"], ["8", "booked"]].map(([value, label]) => `<span><strong>${value}</strong>${label}</span>`).join("")}
        </div>
      </section>

      <section class="scene-panel revenue-scene-panel">
        <div class="scene-panel-head"><div><span>Revenue Trail</span><strong>Closed won path</strong></div><b>$18.4k</b></div>
        <div class="scene-timeline">
          ${["Lead uploaded", "SMS reply", "Voice call", "Booking", "Closed won"].map(item => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function framerInspiredProductSections() {
  return `
    <section class="framer-process-section section reveal" id="system-preview">
      <div class="section-heading">
        <p class="signal">Process</p>
        <h2>A cleaner way to turn knowledge into execution.</h2>
        <p>Precision OS works like an implementation layer: capture the source material, build the system, then launch with review gates and tracked outcomes.</p>
      </div>
      <div class="framer-process-grid">
        ${[
          ["01", "Capture & diagnose", "Upload SOPs, process docs, Looms, screenshots or old leads. Precision OS extracts the useful operating knowledge and flags missing information.", ["source parsed", "missing info found", "fit score ready"]],
          ["02", "Build the operating layer", "Procedures, templates, AI worker roles, review gates and handoffs are structured into a system your team can actually run.", ["procedures drafted", "workers scoped", "review gates active"]],
          ["03", "Launch, review and track", "The operating system moves into delivery: client-ready handoff, campaign approval, booked-call tracking and revenue attribution.", ["handoff ready", "campaign queued", "revenue tracked"]],
        ].map(([number, title, text, tags]) => `
          <article class="framer-process-card">
            <span>${number}</span>
            <h3>${title}</h3>
            <p>${text}</p>
            <div>${tags.map(tag => `<small>${tag}</small>`).join("")}</div>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="framer-product-section section reveal">
      <div class="framer-product-copy">
        <p class="signal">Product surface</p>
        <h2>Serious operating infrastructure, not a chatbot wrapper.</h2>
        <p>The system is built around work objects: sources, tasks, review gates, workers, campaigns, handoffs and revenue events. Everything has a status, owner and next action.</p>
      </div>
      <div class="framer-product-board">
        <article class="product-board-main">
          <div class="scene-panel-head"><div><span>Operating Pack</span><strong>Client Follow-Up OS</strong></div><b>ready</b></div>
          <div class="product-board-timeline">
            ${["Source", "Intake", "Procedure", "Worker", "Review", "Handoff"].map((item, index) => `<span class="${index < 4 ? "done" : index === 4 ? "active" : ""}">${item}</span>`).join("")}
          </div>
          <div class="product-board-table">
            ${[
              ["Source extraction", "complete", "6 docs"],
              ["Procedure builder", "ready", "9 drafts"],
              ["AI worker cards", "review", "3 roles"],
              ["Client handoff", "queued", "1 pack"],
            ].map(([name, status, meta]) => `<div><strong>${name}</strong><span>${status}</span><em>${meta}</em></div>`).join("")}
          </div>
        </article>
        <article class="product-board-side">
          <span>Dead Lead Recovery</span>
          <strong>812 valid contacts</strong>
          <p>74 replies, 21 positive, 8 booked calls.</p>
          <i><b style="width:74%"></b></i>
        </article>
        <article class="product-board-side">
          <span>Review Gates</span>
          <strong>3 approvals open</strong>
          <p>SMS campaign, client template, low-confidence output.</p>
          <i><b style="width:42%"></b></i>
        </article>
        <article class="product-board-side revenue">
          <span>Revenue Trail</span>
          <strong>$18.4k attributed</strong>
          <p>Lead uploaded → call → booking → closed won.</p>
          <i><b style="width:68%"></b></i>
        </article>
      </div>
    </section>
  `;
}

function precisionSystemSection() {
  return framerInspiredProductSections();
}

function moduleButton(module, index) {
  const active = module.key === activeFunnelModule;
  return `
    <button
      class="os-module module-${index + 1} ${active ? "active" : ""}"
      data-funnel-module="${module.key}"
      role="listitem"
      aria-pressed="${active ? "true" : "false"}"
      aria-label="Show ${module.label} preview"
    >
      <span class="module-icon" aria-hidden="true"><i></i><i></i><i></i></span>
      <span class="module-label">${module.label}</span>
      <small>${module.line}</small>
      <b>${module.status}</b>
    </button>
  `;
}

function modulePreviewPanel(module) {
  const preview = module.preview;
  return `
    <aside class="module-preview-panel" aria-live="polite">
      <div class="preview-topline">
        <span>${preview.eyebrow}</span>
        <b>${module.status}</b>
      </div>
      <h3>${preview.title}</h3>
      <p>${preview.summary}</p>
      <div class="module-preview-flow">
        ${preview.flow.map((step, index) => `<span class="${index < 2 ? "done" : index === 2 ? "active" : ""}">${step}</span>`).join("")}
      </div>
      <div class="module-preview-metrics">
        ${preview.metrics.map(([value, label]) => `<article><strong>${value}</strong><span>${label}</span></article>`).join("")}
      </div>
      <div class="module-preview-cards">
        ${preview.cards.map(([title, text]) => `<article><strong>${title}</strong><p>${text}</p></article>`).join("")}
      </div>
      <button class="module-micro-cta" data-form-path="${module.key === "dead-lead-recovery" || module.key === "voice-worker" || module.key === "revenue-tracking" ? "dead-leads" : "workflow"}" data-funnel-scroll="#start">
        ${preview.cta}
      </button>
    </aside>
  `;
}

function funnelDashboardPreview() {
  const flow = funnelFlows[activeFunnelTab];
  const metrics = funnelMetrics[activeFunnelTab];
  return `
    <div class="funnel-preview-shell reveal">
      <div class="preview-topline">
        <strong>${activeFunnelTab === "dead-leads" ? "Dead Lead OS" : "Workflow OS"}</strong>
        <span>Demo preview</span>
      </div>
      <div class="preview-metrics">
        ${metrics.map(([label, value]) => `<article><span>${label}</span><strong>${value}</strong></article>`).join("")}
      </div>
      <div class="preview-flow">
        ${flow.map((step, index) => `<span class="${index < 3 ? "done" : index === 3 ? "active" : ""}">${step}</span>`).join("")}
      </div>
    </div>
  `;
}

function funnelOfferCards() {
  const offerData = [
    {
      key: "workflow",
      title: "Guided Workflow Sprint",
      price: "$2,500 setup + platform access",
      best: ["client onboarding", "quote follow-up", "agency delivery", "recruitment screening", "admin handoffs", "reporting", "support escalation", "document collection"],
      includes: ["1 workflow map", "workflow phases", "procedures", "AI worker instructions", "templates", "review gates", "automation-readiness score", "handover summary", "exportable operating pack"],
      cta: "Start One Workflow",
    },
    {
      key: "dead-leads",
      title: "Dead Lead Reactivation OS",
      price: "From $500/month + usage + performance",
      best: ["old enquiries", "abandoned quotes", "inactive contacts", "past customers", "dead CRM leads", "stalled sales pipelines"],
      includes: ["lead import", "list cleanup", "consent/opt-out review", "SMS campaign approval", "reply classification", "Voice Worker follow-up", "booking tracker", "revenue attribution", "performance tracking"],
      cta: "Reactivate Old Leads",
    },
  ];
  return offerData.map(offer => `
    <article class="funnel-offer-card ${offer.key === selectedFunnelPath ? "active" : ""}">
      <div>
        <span class="offer-badge">Buy now</span>
        <h3>${offer.title}</h3>
        <strong>${offer.price}</strong>
      </div>
      <section>
        <small>Best for</small>
        <div class="mini-flow">${offer.best.map(item => `<span>${item}</span>`).join("")}</div>
      </section>
      <section>
        <small>Includes</small>
        <ul>${offer.includes.map(item => `<li>${item}</li>`).join("")}</ul>
      </section>
      ${button(offer.cta, offer.key === "workflow" ? "primary" : "secondary", `data-form-path="${offer.key}" data-funnel-scroll="#start" data-track="pricing_cta_clicked"`)}
    </article>
  `).join("");
}

function funnelLeadForm() {
  if (funnelFormSubmitted) {
    return `
      <div class="funnel-confirmation reveal">
        <span class="offer-badge">Request received</span>
        <h3>Your request has been received.</h3>
        <p>Next step: we’ll review your answers and send the correct intake/upload path.</p>
        <div class="confirmation-actions">
          ${button("Pay deposit", "primary compact", 'data-placeholder-action="deposit"')}
          ${button("Upload docs", "secondary compact", 'data-placeholder-action="upload_docs"')}
          ${button("Upload leads", "secondary compact", 'data-placeholder-action="upload_leads"')}
        </div>
      </div>
    `;
  }
  const isDeadLeads = formPath === "dead-leads";
  return `
    <form class="funnel-form reveal" data-funnel-form>
      <div class="form-progress"><span style="width:${isDeadLeads ? "66%" : "52%"}"></span></div>
      <fieldset class="path-radio-grid">
        <legend>Choose a path</legend>
        <label class="${isDeadLeads ? "selected" : ""}">
          <input type="radio" name="path" value="dead-leads" ${isDeadLeads ? "checked" : ""} data-form-path="dead-leads" />
          <strong>I want to reactivate old leads</strong>
          <span>Old enquiries, abandoned quotes, inactive contacts or past customers.</span>
        </label>
        <label class="${!isDeadLeads ? "selected" : ""}">
          <input type="radio" name="path" value="workflow" ${!isDeadLeads ? "checked" : ""} data-form-path="workflow" />
          <strong>I want to systemise one workflow</strong>
          <span>Onboarding, delivery, reporting, admin, support or sales handoffs.</span>
        </label>
      </fieldset>
      <div class="form-grid">
        <input name="name" placeholder="Name" required />
        <input name="business_name" placeholder="Business name" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="phone" placeholder="Phone" required />
        <input name="industry" placeholder="Industry" required />
        ${isDeadLeads ? `
          <input name="lead_count" placeholder="Approximate old lead count" required />
          <input name="lead_storage" placeholder="Where are the leads stored?" required />
          <input name="average_deal_value" placeholder="Average deal value" required />
          <select name="consent_history" required><option value="">Do you have source/consent history?</option><option>Yes</option><option>Some of it</option><option>No / unsure</option></select>
          <input name="booked_calls_owner" placeholder="Who handles booked calls?" required />
        ` : `
          <input name="workflow" placeholder="Workflow to systemise" required />
          <textarea name="breaks" placeholder="What breaks in the process?" required></textarea>
          <input name="tools" placeholder="Tools used" required />
          <select name="docs_available" required><option value="">Do you have SOPs/docs/Looms?</option><option>Yes</option><option>Some notes</option><option>No documents yet</option></select>
          <textarea name="desired_outcome" placeholder="Desired outcome" required></textarea>
        `}
      </div>
      <button class="btn primary" type="submit"><span>${isDeadLeads ? "Check My Old Leads" : "Start Workflow Sprint"}</span><span class="btn-mark">→</span></button>
    </form>
  `;
}

function landing() {
  return `
    <header class="landing-nav">
      <a class="brand" href="#" data-view="landing">${brandLockup}</a>
      <nav aria-label="Primary">
        <a href="#solution">Platform</a>
        <a href="#launch-offers">Offers</a>
        <a href="#dashboard-preview">How It Works</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQ</a>
      </nav>
      <div class="nav-auth">
        ${session?.access_token
          ? `<button class="btn primary compact" data-view="dashboard"><span>Dashboard</span><span class="btn-mark">→</span></button>`
          : `<a class="nav-login" href="#" data-view="auth">Login</a>
             ${button("Start", "primary compact", 'data-offer="guided-workflow-sprint"')}`}
      </div>
    </header>

    <main>
      <section class="hero section">
        <div class="hero-copy reveal">
          <p class="signal">Business operating system builder</p>
          <h1>Your business does not need more software. It needs an operating system.</h1>
          <p class="lead">Upload SOPs, process docs, Looms or old lead data. Precision OS turns messy business knowledge into workflow maps, AI workers, review gates, templates and tracked execution systems, with precise pricing and no sales theatre.</p>
          <div class="hero-actions">
            ${button("Start One Workflow", "primary", 'data-offer="guided-workflow-sprint"')}
            ${button("Reactivate Old Leads", "secondary", 'data-offer="dead-lead-reactivation-os"')}
            ${button("View Pricing", "light", 'data-scroll="#pricing"')}
          </div>
          <div class="promise">
            <strong>Precise data. Precise pricing. Precision OS.</strong>
            <span>Defined scope. Written delivery. Human review. No nonsense.</span>
          </div>
        </div>
        <div class="product-shell hero-product reveal" id="demo">
          ${productMockup()}
        </div>
      </section>

      <section class="section launch-paths" id="launch-offers">
        <div class="section-heading reveal">
          <p class="signal">Launch offers</p>
          <h2>Two ways to buy now.</h2>
          <p>Start with one defined workflow, or turn old lead data into a tracked reactivation system. Other Precision OS packages are coming soon after launch capacity opens.</p>
        </div>
        <div class="launch-card-grid reveal">
          ${launchOffers.map((offer, index) => `
            <article class="launch-path-card ${index === 0 ? "featured" : ""}">
              <span class="offer-badge">Buy now</span>
              <h3>${offer.name}</h3>
              <strong>${offer.price}<span>${offer.suffix}</span></strong>
              <p>${offer.summary}</p>
              ${button(offer.cta, index === 0 ? "primary" : "secondary", `data-offer="${offer.data}"`)}
            </article>
          `).join("")}
        </div>
      </section>

      <section class="section problem-cause">
        <article class="reveal">
          <p class="signal">Problem</p>
          <h2>Most businesses are not broken. Their workflows are invisible.</h2>
          <p>Work is scattered across SOPs, docs, inboxes, CRMs, spreadsheets, Looms, staff memory and owner knowledge. Tasks get missed, handoffs break, approvals happen in random chats, and nobody has a clear view of what is ready, blocked or waiting.</p>
        </article>
        <article class="reveal">
          <p class="signal">Cause</p>
          <h2>More tools do not fix undefined work.</h2>
          <p>Most teams add more software before they map the workflow. They buy a CRM, project board, automation tool or AI assistant, but the actual process is still unclear. Who owns the step? What can AI draft? What needs human approval? What happens next?</p>
        </article>
      </section>

      <section class="section solution-flow" id="solution">
        <div class="section-heading reveal">
          <p class="signal">Solution</p>
          <h2>Precision OS defines the work.</h2>
          <p>Every launch path turns raw business material into a controlled execution layer: what exists, what is ready, what needs review, and what can run next.</p>
        </div>
        <div class="solution-rail reveal">
          ${launchFlow.map((step, index) => `
            <article>
              <span>${index + 1}</span>
              <strong>${step}</strong>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="section offer-deep-dive">
        ${launchOffers.map((offer, index) => `
          <article class="offer-detail-panel ${index === 1 ? "dark" : ""} reveal">
            <div>
              <p class="signal">${index === 0 ? "Offer one" : "Offer two"}</p>
              <h2>${offer.name}</h2>
              <p>${offer.detail}</p>
              ${button(offer.cta, index === 0 ? "primary" : "light", `data-offer="${offer.data}"`)}
            </div>
            <ul>
              ${offer.includes.map(item => `<li>${item}</li>`).join("")}
            </ul>
          </article>
        `).join("")}
      </section>

      <section class="section dashboard-preview" id="dashboard-preview">
        <div class="section-heading reveal">
          <p class="signal">Raw data operating view</p>
          <h2>The launch view tracks the build and the money.</h2>
          <p>Workflow OS shows the operating pack being built. Dead Lead Reactivation shows lead health, replies, calls, bookings, usage and revenue attribution.</p>
        </div>
        <div class="raw-dashboard reveal">
          <section>
            <div class="panel-title"><strong>Workflow OS</strong><small>Guided Sprint</small></div>
            ${[
              ["Workflow phases mapped", "5"],
              ["Procedures generated", "9"],
              ["Workers assigned", "3"],
              ["Review gates added", "4"],
            ].map(([label, value]) => `<article><span>${label}</span><strong>${value}</strong></article>`).join("")}
          </section>
          <section>
            <div class="panel-title"><strong>Dead Lead Reactivation</strong><small>Campaign OS</small></div>
            ${[
              ["Leads imported", "1,842"],
              ["Positive replies", "67"],
              ["Voice calls queued", "28"],
              ["Bookings attributed", "11"],
            ].map(([label, value]) => `<article><span>${label}</span><strong>${value}</strong></article>`).join("")}
          </section>
        </div>
      </section>

      <section class="section demo-band">
        <div class="section-heading reveal">
          <p class="signal">Interactive product preview</p>
          <h2>From static knowledge to installed operating rhythm.</h2>
          <p>The preview shows the workflow value chain: capture messy inputs, expose the workflow, generate usable assets, then decide what AI can safely assist.</p>
        </div>
        <div class="demo-grid reveal">
          ${flowSteps.map((step, index) => `
            <button class="flow-tile ${index === activeDemo ? "active" : ""}" data-demo="${index}">
              <span class="flow-index">${String(index + 1).padStart(2, "0")}</span>
              <strong>${step[0]}</strong>
              <small>${step[1]}</small>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="section split" id="how">
        <div class="section-heading sticky-copy reveal">
          <p class="signal">Guided Sprint flow</p>
          <h2>Teach first. Automate when the work is understood.</h2>
          <p>The platform starts with workflow clarity because automation before understanding creates tool sprawl, fragile handoffs, and avoidable risk.</p>
        </div>
        <div class="process-stack reveal">
          ${["Upload source", "Discovery", "Workflow map", "Assets", "Review", "Export"].map((title, index) => `
            <article class="process-row">
              <span>${index + 1}</span>
              <div>
                <h3>${title}</h3>
                <p>${[
                  "Capture imperfect process knowledge from documents, calls, notes, checklists, forms and team habits.",
                  "Extract roles, steps, handoffs, tools, risks, missing inputs and automation potential.",
                  "Confirm an editable workflow map that shows how the company actually operates.",
                  "Create procedures, checklists, templates, review rules and suggested workers.",
                  "Complete written review rounds before the operating pack is marked ready.",
                  "Export the operating pack and install the next workflow once value is proven."
                ][index]}</p>
              </div>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="section os-builder" id="builder">
        <div class="section-heading reveal">
          <p class="signal">Dead Lead Reactivation flow</p>
          <h2>You already paid for the leads. Precision OS finds the ones still alive.</h2>
        </div>
        <div class="builder-board reveal">
          ${reactivationSteps.map(([layer, text], index) => `
            <article class="layer-card">
              <span class="layer-count">${index + 1}</span>
              <h3>${layer}</h3>
              <p>${text}</p>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="section split inverse">
        <div class="worker-panel reveal">
          ${workerPreview()}
        </div>
        <div class="section-heading reveal">
          <p class="signal">Worker suggestions</p>
          <h2>AI workers are proposed as controlled roles, not blind automations.</h2>
          <p>Each worker includes purpose, permissions, tool access, escalation rules, and human review requirements. The customer sees business language. The technical layer stays hidden.</p>
        </div>
      </section>

      <section class="section readiness-section">
        <div class="section-heading reveal">
          <p class="signal">Automation readiness</p>
          <h2>Not every step should be automated.</h2>
          <p>Tasks are scored by repetition, risk, available data, judgement required, tool complexity, and cost of error.</p>
        </div>
        <div class="readiness-board reveal">
          ${readinessGraph()}
        </div>
      </section>

      <section class="section marketplace">
        <div class="section-heading reveal">
          <p class="signal">Expansion path</p>
          <h2>Start with one system. Expand when the first one proves value.</h2>
        </div>
        <div class="market-grid reveal">
          ${["One workflow", "Second workflow", "Department OS", "Business OS"].map((name, i) => `
            <article class="market-card">
              <div>
                <span class="status-dot"></span>
                <strong>${name}</strong>
              </div>
              <p>${["Buy the Guided Workflow Sprint or Dead Lead Reactivation OS.", "Add another workflow once the first one is live.", "Map one team or function with review gates and reporting.", "Connect multiple departments and apps after discovery."][i]}</p>
              <small>${["Buy now", "Coming soon", "Coming soon", "Discovery scoped"][i]}</small>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="section industries">
        <div class="section-heading reveal">
          <p class="signal">Use cases</p>
          <h2>Built for businesses with repeatable work.</h2>
        </div>
        <div class="industry-list reveal">
          ${industries.map(({ name, problem, copy, flow }) => `
            <article>
              <h3>${name}</h3>
              <p class="problem"><strong>Problem:</strong> ${problem}</p>
              <p>${copy}</p>
              <div class="mini-flow" aria-label="${name} workflow">
                ${flow.map(step => `<span>${step}</span>`).join("")}
              </div>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="section pricing" id="pricing">
        <div class="section-heading reveal">
          <p class="signal">Launch offers</p>
          <h2>Buy the first operating system your business can actually run.</h2>
          <p>We are launching around two focused offers: one to turn a messy workflow into a working Precision OS pack, and one to reactivate old leads with a controlled operating system. Larger implementation packages are coming soon after launch capacity opens.</p>
          <div class="pricing-actions">
            ${button("Buy Guided Sprint", "primary", 'data-offer="guided-workflow-sprint"')}
            ${button("Buy Reactivation OS", "secondary", 'data-offer="dead-lead-reactivation-os"')}
          </div>
        </div>
        <div class="launch-offer-strip reveal">
          <span><b>Launch focus</b>Guided Workflow Sprint and Dead Lead Reactivation OS are available now.</span>
          <span><b>Scope control</b>Implementation, usage, review rounds, and connected apps are scoped before build.</span>
          <span><b>Coming soon</b>DIY Platform, Pay-As-You-Build, Department OS, Business OS, and Enterprise OS.</span>
        </div>
        <div class="launch-pricing-grid reveal">
          ${[
            {
              name: "Guided Workflow Sprint",
              price: "$2,500",
              suffix: "setup + platform access",
              badge: "Buy now",
              copy: "For businesses that want one important workflow mapped, systemised, reviewed and ready to run inside Precision OS.",
              label: "Includes",
              items: ["1 workflow mapped", "Up to 5 phases", "Procedures", "Templates", "AI workers", "Review gates", "2 written review rounds", "Handover Loom"],
              cta: "Buy Guided Sprint",
              microcopy: "Best first purchase for service businesses, agencies, consultants, recruiters and operators.",
              featured: true
            },
            {
              name: "Dead Lead Reactivation OS",
              price: "From $500",
              suffix: "/ month + usage + performance",
              badge: "Buy now",
              copy: "For businesses with old enquiries, quote lists, abandoned leads or past customers that need a controlled reactivation system.",
              label: "Includes",
              items: ["Lead import and list cleanup", "Consent and opt-out review", "2-line SMS sequence", "Positive reply classifier", "Voice worker script", "Booking tracker", "Revenue attribution rules", "Performance reporting"],
              cta: "Buy Reactivation OS",
              microcopy: "Usage and booked-call or recovered-revenue performance terms are scoped before launch."
            }
          ].map((offer) => `
            <article class="price-card launch-card ${offer.featured ? "featured" : ""}">
              <div class="price-card-body">
                <span class="offer-badge">${offer.badge}</span>
                <h3>${offer.name}</h3>
                <strong>${offer.price}<span>${offer.suffix}</span></strong>
                <p>${offer.copy}</p>
                <small>${offer.label}</small>
                <ul>
                  ${offer.items.map(item => `<li>${item}</li>`).join("")}
                </ul>
              </div>
              <div class="price-card-cta">
                ${button(offer.cta, offer.featured ? "primary" : "secondary")}
                <em>${offer.microcopy}</em>
              </div>
            </article>
          `).join("")}
        </div>
        <div class="pricing-path reveal">
          <div>
            <strong>Launch path:</strong>
            <span>Buy one launch offer now. Expand once the first workflow or reactivation system proves value.</span>
            <p>Guided Workflow Sprint is the cleanest entry point for systemising a core process. Dead Lead Reactivation OS is the fastest revenue-focused entry point for businesses with old leads sitting idle.</p>
          </div>
          ${button("Buy Launch Offer", "primary", 'data-offer="launch-offer"')}
        </div>
        <div class="coming-soon-offers reveal">
          <div class="panel-title"><strong>Coming soon</strong><small>After launch capacity opens</small></div>
          ${[
            ["DIY Platform", "$499/month", "Self-serve workflow maps, workers, templates and marketplace packs."],
            ["Pay-As-You-Build", "$3,000/workflow", "Build the operating system one workflow at a time."],
            ["Full Implementation Sprint", "$15,000 setup", "Multiple workflows, app map, review queue and handover."],
            ["Department OS", "$25,000 setup", "One department fully mapped, governed and managed."],
            ["Business OS", "Discovery scoped", "Multi-department operating layer for larger teams."],
            ["Enterprise OS", "Custom", "Private operating systems for franchises, partners and multi-location teams."]
          ].map(([title, price, text]) => `
            <article>
              <span>${price}</span>
              <strong>${title}</strong>
              <p>${text}</p>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="section founder-cta reveal">
        <div>
          <p class="signal">Anti-sales promise</p>
          <h2>No mystery pricing. No fake urgency. No bloated pitch deck.</h2>
          <p>If Precision OS fits your business, come get it. If it does not, the scope will make that obvious before anyone wastes time.</p>
        </div>
        ${button("View Launch Offers", "light", 'data-scroll="#pricing"')}
      </section>

      <section class="section faq" id="faq">
        <div class="section-heading reveal">
          <p class="signal">FAQ</p>
          <h2>Built for controlled operational leverage.</h2>
        </div>
        <div class="faq-list reveal">
          ${[
            ["Is this an AI agent builder?", "No. Precision OS is a business operating system builder. AI workers are one output after the workflow is understood."],
            ["Can it handle messy business knowledge?", "Yes. The intake layer is designed for imperfect SOPs, PDFs, Loom transcripts, voice notes, screenshots, checklists, forms, and pasted notes."],
            ["Does AI execute without approval?", "The default trust model is AI prepares, humans approve, and automation increases only when readiness is proven."],
            ["What does the marketplace sell?", "Verified operating system packs with workflows, procedures, templates, workers, review gates, and operating cadence."],
          ].map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("")}
        </div>
      </section>
    </main>

    <footer class="footer">
      <strong class="footer-brand">${brandLockup}</strong>
      <span>Business operating system builder for teams that want to systemise, teach, run, improve, and scale.</span>
      <div class="footer-actions">
        <button data-view="auth">Login</button>
      </div>
    </footer>
  `;
}

function productMockup() {
  return `
    <div class="mock-top">
      <span></span><span></span><span></span>
      <strong>Launch Build Room</strong>
    </div>
    <div class="mock-body">
      <aside>
        ${["Inputs", "Workflow", "Procedures", "Workers", "Review"].map((x, i) => `<button class="${i === activeDemo ? "selected" : ""}">${x}</button>`).join("")}
      </aside>
      <section class="mock-canvas">
        <div class="upload-card">
          <small>Captured source</small>
          <strong>Client Delivery Playbook.pdf</strong>
          <div class="scan-line"></div>
        </div>
        <div class="node-map">
          ${flowSteps.slice(1).map((step, index) => `<div class="node ${index === activeDemo - 1 ? "hot" : ""}"><span>${index + 1}</span>${step[0]}</div>`).join("")}
        </div>
        <div class="mock-output">
          <div><strong>24</strong><span>procedures</span></div>
          <div><strong>4</strong><span>workers</span></div>
          <div><strong>6</strong><span>review gates</span></div>
        </div>
      </section>
    </div>
  `;
}

function workerPreview() {
  return `
    <div class="panel-title">
      <span class="status-dot"></span>
      <strong>Suggested workers</strong>
      <small>4 proposed</small>
    </div>
    ${[
      ["Intake Triage Worker", "Sort new requests, identify missing details, and route next actions.", "AI-assisted", 66],
      ["Proposal Draft Worker", "Prepare scoped proposal sections from approved templates.", "Human sampled", 71],
      ["Follow-up Worker", "Trigger CRM logs and client follow-up sequences.", "Ready", 84],
    ].map(([name, text, status, score]) => `
      <article class="worker-row">
        <div>
          <strong>${name}</strong>
          <p>${text}</p>
        </div>
        <span>${status}</span>
        <b>${score}</b>
      </article>
    `).join("")}
  `;
}

function readinessGraph() {
  return `
    <div class="graph">
      ${readiness.map(([label, score, tag]) => `
        <div class="bar-row">
          <span>${label}</span>
          <div class="bar-track"><i style="width:${score}%"></i></div>
          <strong>${score}</strong>
          <em>${tag}</em>
        </div>
      `).join("")}
    </div>
    <div class="score-key">
      <span>80-100 Ready</span>
      <span>60-79 Assist</span>
      <span>35-59 Controlled</span>
      <span>0-34 Manual</span>
    </div>
  `;
}

function dashboard() {
  return `
    <main class="app-shell ${activeDashboard === "Connected Apps" ? "connectors-shell" : ""}">
      <aside class="sidebar">
        <a class="brand" href="#" data-view="landing">${brandLockup}</a>
        <div class="workspace-switcher">
          <small>Workspace</small>
          <strong>Service Operations</strong>
        </div>
        <nav aria-label="App navigation">
          ${navGroups.map(group => `
            <div class="nav-group">
              <span class="nav-group-label">${group.label}</span>
              ${group.items.map(item => `<button class="${item === activeDashboard ? "active" : ""}" data-section="${item}">${item}</button>`).join("")}
            </div>
          `).join("")}
          ${canAccessAdmin() ? `
            <div class="nav-group">
              <span class="nav-group-label">Internal</span>
              <button data-view="admin" data-admin-section="Agent Command Centre" class="${activeView === "admin" && activeAdminSection === "Agent Command Centre" ? "active" : ""}">Agent Command Centre</button>
            </div>
          ` : ""}
        </nav>
      </aside>
      <section class="app-main">
        <header class="topbar">
          <div class="search"><span></span><input aria-label="Search" placeholder="Search knowledge sources, workflows, procedures, workers..." /></div>
          <div class="topbar-actions">
            ${canAccessAdmin() ? `<button class="btn secondary compact" data-view="admin"><span>Admin</span><span class="btn-mark">⌁</span></button>` : ""}
            <button class="btn secondary compact rail-toggle" data-section="Review Queue"><span>Review Queue</span><span class="btn-mark">!</span></button>
            <button class="btn secondary compact" data-section="Upload SOP / Source"><span>Upload Source</span><span class="btn-mark">+</span></button>
            <button class="btn light compact" data-logout><span>Sign out</span><span class="btn-mark">×</span></button>
          </div>
        </header>
        ${backendPanel()}
        <div class="app-content">
          <section class="dashboard-canvas">
            ${dashboardContent()}
          </section>
        </div>
      </section>
      <aside class="activity-rail">
        <div class="panel-title"><strong>Activity</strong><small>Live workspace</small></div>
        ${activity.map(([time, text]) => `<article><time>${time}</time><p>${text}</p></article>`).join("")}
        <div class="review-box">
          <strong>Needs approval</strong>
          <p>Compliance approval review gate is blocking OS deployment.</p>
          ${button("Open review gate", "primary compact", 'data-section="Review Gates"')}
        </div>
      </aside>
    </main>
  `;
}

function adminDashboard() {
  if (!session?.access_token) {
    return `
      <main class="admin-login-shell">
        <section class="admin-login-card">
          <a class="brand" href="#" data-view="funnel">${brandLockup}</a>
          <div>
            <p class="signal">Internal admin</p>
            <h1>Agent Command Centre</h1>
            <p>Precision OS delivery control panel is restricted to internal operators. This area manages client intake, agent runs, QA, approvals and expansion opportunities.</p>
          </div>
          <form data-auth="login">
            <input name="email" type="email" placeholder="Admin email" required />
            <input name="password" type="password" placeholder="Password" required />
            <button class="btn primary" type="submit"><span>Sign in with Supabase</span><span class="btn-mark">→</span></button>
            ${authProviderButtons()}
          </form>
          <div class="admin-status ${adminStatus.state}">
            <strong>${adminStatus.state === "error" ? "Access blocked" : "Protected access"}</strong>
            <p>${adminStatus.message}</p>
          </div>
          <button class="btn secondary compact" data-view="dashboard"><span>Back to client app</span><span class="btn-mark">←</span></button>
        </section>
      </main>
    `;
  }
  if (!canAccessAdmin()) {
    return `
      <main class="admin-login-shell">
        <section class="admin-login-card">
          <a class="brand" href="#" data-view="funnel">${brandLockup}</a>
          <div>
            <p class="signal">Internal admin</p>
            <h1>Agent Command Centre locked</h1>
            <p>This control panel is restricted to authenticated workspace owners and admins. Current role: ${workspace?.role || "none"}.</p>
          </div>
          <div class="admin-status error">
            <strong>Admin role required</strong>
            <p>Select an owner/admin workspace or ask an owner to upgrade your workspace role.</p>
          </div>
          <div class="backend-actions">
            <button class="btn primary compact" data-refresh-backend><span>Refresh workspace role</span><span class="btn-mark">↻</span></button>
            <button class="btn secondary compact" data-view="dashboard"><span>Client app</span><span class="btn-mark">←</span></button>
            <button class="btn light compact" data-logout><span>Logout</span><span class="btn-mark">×</span></button>
          </div>
        </section>
      </main>
    `;
  }
  // Executive Board lives on its own protected URL — never rendered inside Precision OS.
  if (activeAdminSection === "Executive Board") activeAdminSection = "Agent Command Centre";
  const isBoard = false;
  return `
    <main class="admin-shell">
      <aside class="admin-sidebar">
        <a class="brand" href="#" data-view="funnel">${brandLockup}</a>
        <div class="workspace-switcher admin-switcher">
          <small>Internal workspace</small>
          <strong>${workspace?.name || "Precision OS Delivery"}</strong>
        </div>
        <nav aria-label="Admin navigation">
          <div class="nav-group">
            <span class="nav-group-label">Delivery</span>
            <button class="${activeAdminSection === "Agent Command Centre" ? "active" : ""}" data-admin-section="Agent Command Centre">Agent Command Centre</button>
          </div>
          <div class="nav-group">
            <span class="nav-group-label">System</span>
            <button class="${activeAdminSection === "Settings" ? "active" : ""}" data-admin-section="Settings">Settings</button>
          </div>
        </nav>
        <div class="admin-sidebar-footer">
          <button class="btn light compact" data-view="dashboard"><span>Client app</span><span class="btn-mark">↗</span></button>
          <button class="btn light compact" data-admin-logout><span>Sign out</span><span class="btn-mark">×</span></button>
        </div>
      </aside>
      <section class="admin-main">
        <header class="topbar admin-topbar">
          <div>
            <strong>${isBoard ? "Executive Board" : "Internal Delivery Control Panel"}</strong>
            <p>${isBoard ? "Business-level agents for strategy, operations, growth, finance, delivery risk and founder approvals." : "Admin-only operating layer for Precision OS delivery."}</p>
          </div>
          <div class="topbar-actions">
            ${isBoard ? `<div class="board-context-pills">
              ${["precision_os", "rebuilt", "group"].map(ctx => `
                <button class="context-pill ${activeBoardContext === ctx ? "active" : ""}" data-board-context="${ctx}">
                  ${ctx === "precision_os" ? "Precision OS" : ctx === "rebuilt" ? "Private Venture" : "Group / Holdings"}
                </button>
              `).join("")}
            </div>` : ""}
          </div>
        </header>
        <div class="app-content">
          <section class="dashboard-canvas admin-canvas">
            ${isBoard ? executiveBoardView() : agentCommandCentreView()}
          </section>
        </div>
      </section>
    </main>
  `;
}

function backendPanel() {
  // Unauthenticated users never reach the dashboard (routed to /auth view),
  // so no inline login/signup cards are rendered here.
  if (!session?.access_token) return "";
  return `
    <section class="backend-strip ${backendStatus.state}">
      <div>
        <strong>${workspace?.name || "Precision OS workspace"}</strong>
        <p>${backendStatus.message}</p>
      </div>
      <div class="backend-actions">
        <button class="btn secondary compact" data-refresh-backend><span>Refresh data</span><span class="btn-mark">↻</span></button>
        <button class="btn light compact" data-logout><span>Logout</span><span class="btn-mark">×</span></button>
      </div>
    </section>
  `;
}

function authProviderButtons() {
  return `
    <div class="auth-divider"><span>or continue with</span></div>
    <div class="auth-provider-grid">
      <button class="oauth-btn" type="button" data-oauth="google"><span class="oauth-mark google-mark">G</span><strong>Google</strong></button>
      <button class="oauth-btn" type="button" data-oauth="apple"><span class="oauth-mark apple-mark"></span><strong>Apple</strong></button>
    </div>
  `;
}

function dashboardContent() {
  if (activeDashboard === "Upload SOP / Source") return uploadView();
  if (activeDashboard === "Workflow Maps") return workflowMapView();
  if (activeDashboard === "Workflows") return workflowsView();
  if (activeDashboard === "Automations") return phasesView();
  if (activeDashboard === "Connected Apps") return connectedAppsView();
  if (activeDashboard === "Procedures") return simpleListView("Generated procedures", "Procedures", backendData.procedures, [
    { name: "Client onboarding procedure", status: "draft", type: "source workflow" },
    { name: "Weekly reporting procedure", status: "draft", type: "source workflow" },
  ]);
  if (activeDashboard === "Workers") return workersView();
  if (activeDashboard === "Review Queue") return workerRunsView();
  if (["Dead Leads", "Campaigns", "Voice Worker", "Bookings", "Revenue Tracking"].includes(activeDashboard)) return reactivationView(activeDashboard);
  if (activeDashboard === "Templates") return simpleListView("Generated templates", "Templates", backendData.templates, [
    { name: "Client update email", status: "draft", type: "email" },
    { name: "Intake checklist", status: "draft", type: "checklist" },
  ]);
  if (activeDashboard === "Review Gates") return simpleListView("Human review gates", "Review Gates", backendData.reviewGates, [
    { name: "Compliance approval", status: "active", reviewer_role: "Reviewer" },
    { name: "Client-facing output approval", status: "active", reviewer_role: "Owner" },
  ]);
  if (activeDashboard === "Marketplace") return marketplaceView();
  if (activeDashboard === "Analytics") return analyticsView();
  return overviewView();
}

function liveCommandCentreRows() {
  const acc = backendData.agentCommandCentre;
  if (!acc || deliverySimulationLoaded) return null;
  return {
    workspaces: (acc.requests?.length ? acc.requests : acc.tasks || []).slice(0, 12).map(item => [
      item.client_name || item.title || workspace?.name || "Internal workspace",
      item.offer_type || item.request_type || item.metadata?.offer_type || "Guided Workflow Sprint",
      item.current_stage || item.status || "In build",
      item.next_agent_type || item.assigned_agent_type || "Delivery Agent",
      item.blocker || "None",
      item.review_required || item.review_gate_required ? "Review required" : "No review blocker",
      item.metadata?.expansion_opportunity || "Expansion not logged",
    ]),
    queue: (acc.agent_run_jobs || []).map(job => [
      `${job.agent_type} job`,
      workspace?.name || "Workspace",
      job.agent_type,
      job.human_review_required ? "high" : "normal",
      job.completed_at ? "complete" : "today",
      job.status,
      `${backendData.uploads.length} sources`,
      job.output_payload?.validation_status || "structured output",
      job.error_message || "None",
      job.human_review_required ? "yes" : "no",
    ]),
    missingInfo: (acc.missing_info || []).map(item => [
      workspace?.name || "Workspace",
      item.question,
      item.reason || "Required before delivery can continue.",
      item.priority || "normal",
      item.expected_answer_format || "short answer",
    ]),
    outputs: (acc.outputs || []).map(item => [
      workspace?.name || "Workspace",
      item.output_type,
      item.title,
      item.summary || "Structured output saved.",
      item.status,
      item.agent_type,
    ]),
    qaDecisions: (acc.review_decisions || []).map(item => [
      workspace?.name || "Workspace",
      item.metadata?.output_title || "Agent output",
      item.decision,
      item.note || "Review decision logged.",
    ]),
    expansionRows: (acc.expansion_opportunities || []).map(item => [
      item.client_name || workspace?.name || "Workspace",
      item.title,
      item.reason || "Expansion opportunity logged.",
      item.estimated_value ? `$${Number(item.estimated_value).toLocaleString()}` : "TBD",
      item.next_action || item.status,
    ]),
  };
}

function agentCommandCentreView() {
  const liveRows = liveCommandCentreRows();
  const workspaces = liveRows?.workspaces?.length ? liveRows.workspaces : deliverySimulationLoaded ? demoDeliveryPipeline.workspaces : deliveryWorkspaces;
  const queue = liveRows?.queue?.length ? liveRows.queue : deliverySimulationLoaded ? demoDeliveryPipeline.queue : agentQueue;
  const missingInfo = liveRows?.missingInfo?.length ? liveRows.missingInfo : deliverySimulationLoaded ? demoDeliveryPipeline.missingInfo : [
    ["Atlas Roofing Co", "Can you provide source history for old leads?", "Needed before campaign approval.", "urgent", "CRM source/export column"],
    ["Northstar Advisory", "Which tool owns project status updates?", "Needed to map handoff ownership.", "normal", "tool name + owner"],
  ];
  const outputs = liveRows?.outputs?.length ? liveRows.outputs : deliverySimulationLoaded ? demoDeliveryPipeline.outputs : [
    ["Northstar Advisory", "workflow_map", "Client onboarding draft", "Draft map created with 7 phases and 2 unclear handoffs.", "draft", "Workflow Mapping Agent"],
    ["Motive Ecommerce", "sms_draft", "Support winback SMS", "Draft held pending opt-out review.", "needs_review", "Dead Lead Reactivation Agent"],
  ];
  const qaDecisions = liveRows?.qaDecisions?.length ? liveRows.qaDecisions : deliverySimulationLoaded ? demoDeliveryPipeline.qa : [
    ["Bright Desk Recruiting", "Operating pack", "client ready", "QA passed, handover summary ready."],
    ["Motive Ecommerce", "SMS draft", "blocked by missing info", "Opt-out field must be mapped before approval."],
  ];
  const expansionRows = liveRows?.expansionRows?.length ? liveRows.expansionRows : deliverySimulationLoaded ? demoDeliveryPipeline.expansion : [
    ["Northstar Advisory", "Monthly Reporting OS", "Client onboarding handoff creates recurring reporting need.", "$3,000+", "log after handover"],
    ["Bright Desk Recruiting", "Interview Coordination OS", "Screening workflow leads naturally into interview scheduling.", "$3,000+", "offer after delivery"],
  ];
  const liveMetrics = backendData.agentCommandCentre?.metrics;
  const metrics = liveMetrics && !deliverySimulationLoaded ? [
    ["New submissions", liveMetrics.new_submissions, "live"],
    ["Intake pending", liveMetrics.intake_reviews_pending, "live"],
    ["Missing info", liveMetrics.missing_info, "open"],
    ["Builds in progress", liveMetrics.builds_in_progress, "live"],
    ["Agent runs", liveMetrics.agent_runs, "logged"],
    ["Needs QA", liveMetrics.needs_qa, "review"],
    ["Client-ready packs", liveMetrics.client_ready, "approval"],
    ["Delivered this week", liveMetrics.delivered_this_week, "live"],
    ["Expansion opportunities", liveMetrics.expansion_opportunities, "logged"],
    ["Scope warnings", liveMetrics.scope_creep_warnings, "review"],
    ["Usage cost", `$${Number(liveMetrics.estimated_usage_cost || 0).toFixed(2)}`, "estimated"],
  ] : deliverySimulationLoaded ? [
    ["Demo clients", "2", "loaded"],
    ["Uploaded sources", "6", "sample data"],
    ["Agent tasks", String(queue.length), "seeded"],
    ["Missing info", String(missingInfo.length), "requests"],
    ["Agent outputs", String(outputs.length), "structured"],
    ["Needs QA", "5", "review gate"],
    ["Client-ready packs", "0", "after QA"],
    ["Delivered / active", "0", "simulation next"],
    ["Expansion opportunities", String(expansionRows.length), "logged"],
    ["Avg delivery time", "4.2d", "simulated"],
    ["Scope warnings", "0", "none"],
  ] : [
    ["New submissions", "12", "+4 today"],
    ["Intake pending", "6", "needs path"],
    ["Missing info", "8", "client blockers"],
    ["Builds in progress", "14", "agent active"],
    ["Needs QA", "9", "brand gate"],
    ["Client-ready packs", "5", "awaiting send"],
    ["Delivered this week", "7", "+18%"],
    ["Expansion opportunities", "11", "logged"],
    ["Avg delivery time", "4.8d", "target 5d"],
    ["Hours at risk", "16", "scope pressure"],
    ["Scope warnings", "3", "operator review"],
  ];
  return `
    <div class="canvas-heading internal-heading">
      <div>
        <p class="signal">Internal delivery layer</p>
        <h1>Agent Command Centre</h1>
        <p>Repeatable client delivery from intake to agent build, QA, client-ready handover, delivered state and expansion opportunity.</p>
      </div>
      <div class="internal-heading-actions">
        <span class="health">${deliverySimulationLoaded ? "Demo delivery pipeline loaded" : "Agents do not freestyle"}</span>
        <button class="btn primary compact" data-run-sop-test><span>Run SOP Delivery Test</span><span class="btn-mark">▶</span></button>
        <button class="btn primary compact" data-load-delivery-demo><span>Load Demo Delivery Pipeline</span><span class="btn-mark">▶</span></button>
        <button class="btn secondary compact" data-reset-delivery-demo><span>Reset Demo Data</span><span class="btn-mark">×</span></button>
      </div>
    </div>

    <section class="internal-stage-rail">
      ${deliveryStages.map((stage, index) => `
        <article class="${index < 2 ? "done" : index === 4 ? "active" : index === 5 ? "warn" : ""}">
          <span>${index + 1}</span>
          <strong>${stage}</strong>
        </article>
      `).join("")}
    </section>

    <div class="internal-metric-grid">
      ${metrics.map(([label, value, sub]) => `<article><span>${label}</span><strong>${value}</strong><small>${sub}</small></article>`).join("")}
    </div>

    <section class="internal-command-layout">
      <div class="agent-roster">
        <div class="panel-title"><strong>Internal agent team</strong><small>${internalAgents.length} delivery agents</small></div>
        ${internalAgents.map(agent => `
          <article class="agent-card">
            <div>
              <span class="agent-status ${agent.status}">${agent.status}</span>
              <h3>${agent.type}</h3>
              <p>${agent.role}</p>
            </div>
            <div class="agent-card-meta">
              <span><b>${agent.queue}</b> queued</span>
              <span><b>${agent.outputs.length}</b> outputs</span>
              <span><b>${agent.checklist.length}</b> done checks</span>
            </div>
            <details>
              <summary>Operating spec</summary>
              <dl>
                <div><dt>Inputs</dt><dd>${agent.inputs.join(", ")}</dd></div>
                <div><dt>Output format</dt><dd>${agent.outputs.join(", ")}</dd></div>
                <div><dt>Quality checklist</dt><dd>${agent.checklist.join(", ")}</dd></div>
                <div><dt>Escalation</dt><dd>${agent.escalation}</dd></div>
              </dl>
            </details>
          </article>
        `).join("")}
      </div>

      <aside class="internal-side-panel">
        <div class="panel-title"><strong>QA review decisions</strong><small>human operator gate</small></div>
        ${["approved", "changes required", "blocked by missing info", "out of scope", "needs human call", "needs client answer", "client ready"].map(decision => `
          <button>${decision}</button>
        `).join("")}
        <div class="review-box">
          <strong>Definition of done</strong>
          <p>Every agent output must include role, inputs, output format, quality checklist, escalation rule, status, workspace, review state and activity log.</p>
        </div>
      </aside>
    </section>

    <section class="delivery-engine-panel">
      <div class="panel-title"><strong>Delivery Automation Engine</strong><small>agent runs, routing, gates and usage controls</small></div>
      <div class="agent-run-grid">
        ${agentRunEngine.map(([name, input, output, rule]) => `
          <article>
            <div>
              <strong>${name}</strong>
              <p>${input}</p>
            </div>
            <dl>
              <div><dt>Structured output</dt><dd>${output}</dd></div>
              <div><dt>Autopilot rule</dt><dd>${rule}</dd></div>
            </dl>
            <div class="backend-actions">
              <button class="btn primary compact" data-agent-run="${name}"><span>Run Agent</span><span class="btn-mark">▶</span></button>
              <button class="btn secondary compact" data-agent-rerun="${name}"><span>Rerun</span><span class="btn-mark">↻</span></button>
            </div>
          </article>
        `).join("")}
      </div>
      <div class="agent-run-log">
        <div class="panel-title"><strong>Agent run log</strong><small>${agentRunLog.length ? `${agentRunLog.length} run events` : "no runs yet"}</small></div>
        ${(agentRunLog.length ? agentRunLog : [["Waiting", "Click Run Agent to create a backend job.", "queued", "usage pending"]]).map(([agent, output, status, usage]) => `
          <article><strong>${agent}</strong><span>${output}</span><span class="stage-pill">${status}</span><em>${usage}</em></article>
        `).join("")}
      </div>
    </section>

    <section class="execution-inspector">
      <div class="panel-title"><strong>Real execution inspector</strong><small>server-side agent output state</small></div>
      <div class="execution-inspector-grid">
        <article class="execution-json-preview">
          <div>
            <strong>Structured JSON</strong>
            <span class="stage-pill">validated</span>
          </div>
          <pre>${JSON.stringify(structuredJsonPreview, null, 2)}</pre>
        </article>
        <article class="execution-markdown-preview">
          <div>
            <strong>Markdown summary</strong>
            <span class="stage-pill">saved</span>
          </div>
          <p>Quote Follow-Up OS is mapped from quote sent through day 7 escalation. The draft includes owners, handoffs, missing client answers and review gates before any client-facing follow-up is activated.</p>
        </article>
        <div class="execution-signal-list">
          ${executionInspectorRows.map(([label, value, note]) => `
            <article>
              <span>${label}</span>
              <strong>${value}</strong>
              <em>${note}</em>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="automation-rule-grid">
      <div class="routing-rules-board">
        <div class="panel-title"><strong>Automatic delivery routing</strong><small>next task creation</small></div>
        ${deliveryRules.map(([path, event, action]) => `
          <article><span>${path}</span><strong>${event}</strong><em>${action}</em></article>
        `).join("")}
      </div>
      <div class="review-gate-rules-board">
        <div class="panel-title"><strong>Human review only at gates</strong><small>exceptions stay visible</small></div>
        ${reviewGateRules.map(rule => `<span>${rule}</span>`).join("")}
      </div>
    </section>

    <section class="client-approval-board">
      <div class="panel-title"><strong>Client approval portal preview</strong><small>simple review screen</small></div>
      ${clientApprovalItems.map(([client, title, type, text]) => `
        <article>
          <div><strong>${client}</strong><span>${type}</span></div>
          <h3>${title}</h3>
          <p>${text}</p>
          <div class="backend-actions">
            <button class="btn primary compact"><span>Approve</span><span class="btn-mark">✓</span></button>
            <button class="btn secondary compact"><span>Request changes</span><span class="btn-mark">↺</span></button>
            <button class="btn secondary compact"><span>Upload extra docs</span><span class="btn-mark">+</span></button>
          </div>
        </article>
      `).join("")}
    </section>

    <section class="usage-control-board">
      <div class="panel-title"><strong>Usage + cost controls</strong><small>package allowance, cost estimate and review flag</small></div>
      ${usageControlRows.map(([type, run, client, cost, allowance, review]) => `
        <article>
          <span>${type}</span>
          <strong>${run}</strong>
          <span>${client}</span>
          <span>${cost}</span>
          <span>${allowance}</span>
          <em>review: ${review}</em>
        </article>
      `).join("")}
    </section>

    ${deliverySimulationLoaded ? `
      <section class="simulation-summary">
        <article>
          <span class="offer-badge">Guided Workflow Sprint</span>
          <strong>Perth Trade Co</strong>
          <p>Quote Follow-Up OS is in build. Sources: quote process notes, SMS follow-up examples, sales checklist. Goal: stop enquiries going cold.</p>
          <div class="mini-flow"><span>Workflow map</span><span>Procedures</span><span>AI worker cards</span><span>Templates</span><span>Review gates</span><span>Handover summary</span></div>
        </article>
        <article>
          <span class="offer-badge">Dead Lead Reactivation OS</span>
          <strong>Renovation Company</strong>
          <p>1,000 old leads loaded, 812 valid contacts, 74 risky contacts, 51 duplicates and 63 missing phones. Campaign requires consent QA before launch.</p>
          <div class="mini-flow"><span>Clean list</span><span>Excluded contacts</span><span>Consent flags</span><span>SMS draft</span><span>Reply rules</span><span>Booking tracker</span></div>
        </article>
      </section>
    ` : ""}

    <section class="workspace-status-board">
      <div class="panel-title"><strong>Client workspace status</strong><small>delivery pipeline</small></div>
      ${workspaces.map(([client, offer, stage, agent, missing, qa, expansion]) => `
        <article>
          <div><strong>${client}</strong><span>${offer}</span></div>
          <span class="stage-pill">${stage}</span>
          <span>${agent}</span>
          <span>${missing}</span>
          <span>${qa}</span>
          <em>${expansion}</em>
        </article>
      `).join("")}
    </section>

    <section class="agent-queue-table">
      <div class="panel-title"><strong>Agent queue</strong><small>tasks and required outputs</small></div>
      ${queue.map(([task, client, agent, priority, due, status, files, output, blocker, review]) => `
        <article>
          <strong>${task}</strong>
          <span>${client}</span>
          <span>${agent}</span>
          <span class="priority ${priority}">${priority}</span>
          <span>${due}</span>
          <span>${status}</span>
          <span>${files}</span>
          <span>${output}</span>
          <span>${blocker}</span>
          <em>review: ${review}</em>
        </article>
      `).join("")}
    </section>

    <section class="missing-info-board">
      <div class="panel-title"><strong>Missing info requests</strong><small>client questions and blockers</small></div>
      ${missingInfo.map(([client, question, reason, priority, format]) => `
        <article>
          <span class="priority ${priority}">${priority}</span>
          <strong>${client}</strong>
          <p>${question}</p>
          <small>${reason}</small>
          <em>Expected: ${format}</em>
        </article>
      `).join("")}
    </section>

    <section class="agent-output-board">
      <div class="panel-title"><strong>Agent outputs created</strong><small>structured JSON + markdown records</small></div>
      ${outputs.map(([client, type, title, summary, status, agent]) => `
        <article>
          <div><strong>${title}</strong><span>${client}</span></div>
          <span>${type}</span>
          <p>${summary}</p>
          <span class="stage-pill">${status}</span>
          <em>${agent}</em>
        </article>
      `).join("")}
    </section>

    <section class="qa-expansion-grid">
      <div class="qa-decision-board">
        <div class="panel-title"><strong>QA decisions</strong><small>review log</small></div>
        ${qaDecisions.map(([client, output, decision, note]) => `
          <article>
            <span class="stage-pill">${decision}</span>
            <strong>${client}</strong>
            <p>${output}: ${note}</p>
          </article>
        `).join("")}
      </div>
      <div class="expansion-board">
        <div class="panel-title"><strong>Expansion opportunities</strong><small>logged after first result</small></div>
        ${expansionRows.map(([client, offer, reason, value, action]) => `
          <article>
            <strong>${offer}</strong>
            <span>${client} · ${value}</span>
            <p>${reason}</p>
            <em>${action}</em>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="structured-output-board">
      <div class="panel-title"><strong>Structured output types</strong><small>saved as JSON + markdown</small></div>
      ${["client_brief", "missing_info_list", "workflow_map", "workflow_phase", "procedure", "checklist", "template", "ai_worker_card", "review_gate", "campaign_plan", "clean_lead_list", "sms_draft", "reply_classification_rules", "voice_worker_queue", "qa_report", "handover_summary", "expansion_recommendation"].map(type => `
        <span>${type}</span>
      `).join("")}
    </section>
  `;
}

function overviewView() {
  const metrics = backendData.dashboard?.metrics;
  const liveMetrics = metrics ? [
    ["Operating systems", metrics.operating_systems, "created"],
    ["Knowledge sources", metrics.sources, "live"],
    ["Workflows created", metrics.workflows, "live"],
    ["Phases mapped", metrics.phases, "managed"],
    ["Workers suggested", metrics.workers, `${metrics.active_workers} active`],
    ["Review gates", metrics.review_gates, "active"],
    ["Awaiting review", metrics.worker_runs_awaiting_review, "worker runs"],
    ["Avg readiness", `${metrics.average_automation_score}%`, "workspace"],
  ] : null;
  return `
    <div class="canvas-heading">
      <div>
        <p class="signal">Dashboard</p>
        <h1>Launch operating room</h1>
      </div>
      <span class="health">Automation health: ${metrics ? `${metrics.average_automation_score}%` : "72%"}</span>
    </div>
    <div class="mode-grid">
      <article class="mode-card active">
        <div>
          <span class="offer-badge">Buy now</span>
          <h2>Workflow OS</h2>
          <p>Guided Workflow Sprint turns one messy process into workflow maps, procedures, workers, templates and review gates.</p>
        </div>
        <div class="mode-metrics">
          ${[["Phases", "5"], ["Procedures", "9"], ["Workers", "3"], ["Gates", "4"]].map(([label, value]) => `<span><strong>${value}</strong>${label}</span>`).join("")}
        </div>
      </article>
      <article class="mode-card">
        <div>
          <span class="offer-badge">Buy now</span>
          <h2>Dead Lead Reactivation</h2>
          <p>Upload old enquiries, clean the list, launch approved outreach, classify replies, queue calls and attribute recovered revenue.</p>
        </div>
        <div class="mode-metrics">
          ${[["Imported", "1,842"], ["Replies", "67"], ["Calls", "28"], ["Bookings", "11"]].map(([label, value]) => `<span><strong>${value}</strong>${label}</span>`).join("")}
        </div>
      </article>
    </div>
    <div class="metric-grid">
      ${(liveMetrics || [
        ["Knowledge sources", "38", "+6 this week"],
        ["Workflows created", "17", "11 approved"],
        ["Procedures generated", "126", "92 ready"],
        ["AI workers suggested", "24", "8 deployable"],
        ["Review gates", "31", "5 blocking"],
        ["OS packs exported", "9", "3 marketplace-ready"],
      ]).map(([label, value, sub]) => `<article><span>${label}</span><strong>${value}</strong><small>${sub}</small></article>`).join("")}
    </div>
    <div class="workbench">
      <section class="workflow-map">
        <div class="panel-title"><strong>${backendData.operatingSystems[0]?.name || "Client Onboarding OS"} phases</strong><small>${backendData.phases.length || 7} phases · ${metrics?.worker_runs_awaiting_review || 2} review items</small></div>
        ${(backendData.phases.length ? backendData.phases.slice(0, 8).map((phase) => [phase.name, phase.human_review_required, phase.status, phase.automation_score]) : [["Lead qualified", false, "Ready", 82], ["Intake complete", false, "Ready", 78], ["Kickoff prepared", false, "Ready", 74], ["Tasks assigned", false, "Ready", 81], ["Compliance approval", true, "Mandatory review", 28], ["Client pack sent", true, "Waiting", 52], ["Follow-up scheduled", false, "Ready", 84]]).map((phase, i) => `<div class="map-node ${phase[1] ? "blocked" : i < 4 ? "done" : ""}"><span>${i + 1}</span><strong>${phase[0]}</strong><small>${phase[2]} · ${phase[3]}%</small></div>`).join("")}
      </section>
      <section class="readiness-mini">${readinessGraph()}</section>
    </div>
  `;
}

function reactivationView(section) {
  const titleMap = {
    "Dead Leads": ["Dead lead list", "Clean, validate and segment old enquiries before campaign launch."],
    "Campaigns": ["Reactivation campaigns", "Track consent review, message approval, reply classification and launch state."],
    "Voice Worker": ["Voice Worker queue", "Positive replies move into a tracked call queue with scripts and call summaries."],
    "Bookings": ["Booked opportunities", "Qualified leads become booked calls with owner, source and next action."],
    "Revenue Tracking": ["Recovered revenue", "Attribute bookings, deals, usage and performance terms without public percentage claims."],
  };
  const [heading, copy] = titleMap[section] || titleMap["Dead Leads"];
  return `
    <div class="canvas-heading">
      <div>
        <p class="signal">Dead Lead Reactivation OS</p>
        <h1>${heading}</h1>
        <p>${copy}</p>
      </div>
      <span class="health">From $500/month + usage + performance</span>
    </div>
    <div class="reactivation-layout">
      <section class="reactivation-stage">
        <div class="panel-title"><strong>Campaign workflow</strong><small>approval required before launch</small></div>
        ${reactivationSteps.map(([name, text], index) => `
          <article class="${index < 3 ? "done" : index === 3 ? "active" : ""}">
            <span>${index + 1}</span>
            <div><strong>${name}</strong><p>${text}</p></div>
          </article>
        `).join("")}
      </section>
      <section class="compliance-panel">
        <div class="panel-title"><strong>Launch checklist</strong><small>Human review gate</small></div>
        ${["Contact source identified", "Opt-out column mapped", "Consent risk reviewed", "2-line SMS approved", "Voice script approved", "Performance terms agreed", "Usage budget confirmed"].map((item, index) => `
          <label><input type="checkbox" ${index < 4 ? "checked" : ""} /> <span>${item}</span></label>
        `).join("")}
        ${button("Approve campaign launch", "primary compact")}
      </section>
    </div>
    <div class="reactivation-metrics">
      ${[
        ["Leads imported", "1,842", "CSV and CRM export"],
        ["Invalid or duplicate", "214", "excluded before send"],
        ["Positive replies", "67", "classified for follow-up"],
        ["Voice calls queued", "28", "ready for worker"],
        ["Bookings created", "11", "calendar tracked"],
        ["Recovered pipeline", "$48,600", "attribution pending"],
      ].map(([label, value, sub]) => `<article><span>${label}</span><strong>${value}</strong><small>${sub}</small></article>`).join("")}
    </div>
  `;
}

function mapNodes() {
  const phases = backendData.phases.length ? backendData.phases : [
    { id: "demo-source", name: "Client Enquiry", objective: "Capture incoming request", owner_role: "Intake Worker", automation_score: 86, risk_level: "low", human_review_required: false, required_inputs: ["New enquiry form"], expected_outputs: ["Qualified lead summary"], status: "Source" },
    { id: "demo-intake", name: "Intake Worker", objective: "Summarise details and flag missing information", owner_role: "Intake Worker", automation_score: 82, risk_level: "low", human_review_required: true, required_inputs: ["Enquiry", "Contact details"], expected_outputs: ["Intake summary"], status: "Worker" },
    { id: "demo-qualify", name: "Qualification Phase", objective: "Check fit and route next action", owner_role: "Operations", automation_score: 74, risk_level: "medium", human_review_required: true, required_inputs: ["Intake summary"], expected_outputs: ["Qualified or rejected lead"], status: "Phase" },
    { id: "demo-checklist", name: "Quote Checklist", objective: "Create quote preparation checklist", owner_role: "Quote Checklist Worker", automation_score: 79, risk_level: "medium", human_review_required: true, required_inputs: ["Qualified lead"], expected_outputs: ["Checklist"], status: "Procedure" },
    { id: "demo-review", name: "Manager Review", objective: "Approve client-facing output", owner_role: "Manager", automation_score: 24, risk_level: "high", human_review_required: true, required_inputs: ["Draft reply"], expected_outputs: ["Approved update"], status: "Review Gate" },
    { id: "demo-follow", name: "Client Follow-Up", objective: "Draft follow-up and update CRM", owner_role: "Follow-Up Worker", automation_score: 84, risk_level: "low", human_review_required: false, required_inputs: ["Approved update"], expected_outputs: ["Follow-up draft"], status: "Automation" },
    { id: "demo-crm", name: "CRM Update", objective: "Record status and next reminder", owner_role: "CRM", automation_score: 92, risk_level: "low", human_review_required: false, required_inputs: ["Follow-up status"], expected_outputs: ["Updated CRM record"], status: "Connected App" },
  ];
  return phases.map((phase, index) => {
    const worker = backendData.workers.find((candidate) => candidate.phase_id === phase.id);
    const connections = backendData.appConnections.filter((connection) => connection.phase_id === phase.id);
    const fallbackApps = index === 0 ? ["Typeform", "Gmail", "HubSpot"] : index === 2 ? ["ClickUp", "Slack", "Google Drive"] : index >= phases.length - 2 ? ["Gmail", "HubSpot", "Google Calendar"] : ["Notion"];
    return {
      id: phase.id || `phase-${index}`,
      type: phase.status || (worker ? "Worker" : "Phase"),
      name: phase.name,
      objective: phase.objective || phase.description || "Manage this phase of the operating system.",
      owner: worker?.name || phase.owner_role || "Human owner",
      input: asDisplayList(phase.required_inputs || ["Source material"]),
      output: asDisplayList(phase.expected_outputs || ["Phase output"]),
      apps: connections.length ? connections.map((connection) => connection.app_name) : fallbackApps,
      review: phase.human_review_required ? "Required before client-facing or sensitive action" : "Optional or sampled",
      score: phase.automation_score || 0,
      risk: phase.risk_level || "medium",
      procedure: backendData.procedures.find((procedure) => procedure.phase_id === phase.id)?.name || "Generated procedure",
      templates: backendData.templates.filter((template) => template.phase_id === phase.id).map((template) => template.name),
      activity: backendData.dashboard?.recent_activity?.[index]?.message || "No recent activity yet",
      nextAction: worker ? "Run worker" : "Assign worker or owner",
    };
  });
}

function asDisplayList(value) {
  if (Array.isArray(value)) return value.join(", ");
  if (typeof value === "string") return value;
  return JSON.stringify(value || []);
}

function workflowMapView() {
  const nodes = mapNodes();
  const active = nodes[Math.min(activeMapNode, nodes.length - 1)] || nodes[0];
  return `
    <div class="canvas-heading">
      <div>
        <p class="signal">Workflow Map</p>
        <h1>Map where work moves, who owns it, and which apps it touches.</h1>
      </div>
      <span class="health">${nodes.length} nodes</span>
    </div>
    <div class="workflow-map-canvas">
      <section class="map-lane">
        ${nodes.map((node, index) => `
          <button class="map-node-card ${index === activeMapNode ? "active" : ""}" data-map-node="${index}">
            <span>${node.type}</span>
            <strong>${node.name}</strong>
            <small>${node.owner} · ${node.score}% ready</small>
          </button>
        `).join("")}
      </section>
      <aside class="map-inspector">
        <div class="panel-title"><strong>${active?.name || "Workflow node"}</strong><small>${active?.type || "Node"}</small></div>
        <p>${active?.objective || ""}</p>
        <dl>
          <div><dt>Owner</dt><dd>${active?.owner || ""}</dd></div>
          <div><dt>Input</dt><dd>${active?.input || ""}</dd></div>
          <div><dt>Output</dt><dd>${active?.output || ""}</dd></div>
          <div><dt>Connected apps</dt><dd>${(active?.apps || []).join(", ")}</dd></div>
          <div><dt>Review</dt><dd>${active?.review || ""}</dd></div>
          <div><dt>Automation score</dt><dd>${active?.score || 0}%</dd></div>
          <div><dt>Risk</dt><dd>${active?.risk || "medium"}</dd></div>
          <div><dt>Procedure</dt><dd>${active?.procedure || ""}</dd></div>
          <div><dt>Templates</dt><dd>${active?.templates?.length ? active.templates.join(", ") : "None yet"}</dd></div>
          <div><dt>Recent activity</dt><dd>${active?.activity || ""}</dd></div>
          <div><dt>Next action</dt><dd>${active?.nextAction || ""}</dd></div>
        </dl>
      </aside>
    </div>
  `;
}

function uploadView() {
  const disabled = !session?.access_token || !workspace;
  return `
    <div class="canvas-heading"><div><p class="signal">Upload SOP / Source</p><h1>Drop messy process knowledge. Build a usable OS pack.</h1></div></div>
    <div class="upload-layout">
      <form class="dropzone capture-form" data-capture>
        <input name="file" type="file" />
        <input name="industry" placeholder="Industry, for example marketing agency" ${disabled ? "disabled" : ""} />
        <input name="workflow_type" placeholder="Workflow type, for example client onboarding" ${disabled ? "disabled" : ""} />
        <textarea name="raw_text" placeholder="Paste process notes, transcript text, checklist steps, or internal knowledge..." ${disabled ? "disabled" : ""}></textarea>
        <strong>Add PDFs, DOCX, Loom transcripts, screenshots, forms, notes, or checklists</strong>
        <span>${disabled ? "Sign in and select a workspace to use the live analysis backend." : "Submits to the backend, extracts text, runs the Knowledge Extraction Engine, and stores the workflow outputs."}</span>
        <button class="btn primary" type="submit" ${disabled ? "disabled" : ""}><span>Analyse process</span><span class="btn-mark">→</span></button>
      </form>
      <div class="parser-preview">
        ${(backendData.uploads.length ? backendData.uploads.slice(0, 5).map(source => `${source.file_name}: ${source.status}`) : ["Workflows found: waiting for analysis", "Missing inputs: detected by AI", "Human review gates: generated after analysis", "Automation candidates: scored per step", "Templates generated: stored in workspace"]).map(x => `<p><span class="status-dot"></span>${x}</p>`).join("")}
      </div>
    </div>
  `;
}

function workflowsView() {
  if (backendData.workflows.length) {
    return `
      <div class="canvas-heading"><div><p class="signal">Workflows</p><h1>Workflow visibility before automation.</h1></div></div>
      <div class="workflow-table">
        ${backendData.workflows.map((workflow) => `
          <article>
            <strong>${workflow.name}</strong>
            <span>${workflow.status}</span>
            <span>${workflow.automation_score} readiness</span>
            <em>${workflow.risk_level}</em>
          </article>
        `).join("")}
      </div>
    `;
  }
  return `
    <div class="canvas-heading"><div><p class="signal">Workflows</p><h1>Workflow visibility before automation.</h1></div></div>
    <div class="workflow-table">
      ${["Client Onboarding OS", "Agency Delivery OS", "Recruitment Desk OS", "Finance Broker OS"].map((name, i) => `
        <article>
          <strong>${name}</strong>
          <span>${[7, 9, 11, 8][i]} steps</span>
          <span>${[72, 81, 64, 58][i]} readiness</span>
          <em>${["Review required", "Ready", "Assist", "Controlled"][i]}</em>
        </article>
      `).join("")}
    </div>
  `;
}

function workersView() {
  if (backendData.workers.length) {
    return `<div class="canvas-heading"><div><p class="signal">Workers</p><h1>Controlled AI roles with permissions and escalation.</h1></div></div><div class="worker-panel app-panel">${backendData.workers.map(worker => `
      <article class="worker-row">
        <div><strong>${worker.name}</strong><p>${worker.phase_managed || worker.role || "Assigned phase"} · ${worker.purpose || "Worker suggestion"}</p></div>
        <span>${worker.human_review_required ? "Review required" : "Ready"}</span>
        <button class="btn primary compact" data-run-worker="${worker.id}"><span>Run</span><span class="btn-mark">→</span></button>
      </article>
    `).join("")}</div>`;
  }
  return `<div class="canvas-heading"><div><p class="signal">Workers</p><h1>Controlled AI roles with permissions and escalation.</h1></div></div><div class="worker-panel app-panel">${workerPreview()}</div>`;
}

function phasesView() {
  const rows = backendData.phases.length ? backendData.phases : [
    { name: "Intake", objective: "Capture required information", owner_role: "Operations", automation_score: 82, risk_level: "low", human_review_required: false, status: "AI-assisted" },
    { name: "Manager review", objective: "Approve client-facing output", owner_role: "Manager", automation_score: 24, risk_level: "high", human_review_required: true, status: "Human-controlled" },
  ];
  return `
    <div class="canvas-heading"><div><p class="signal">Phase management</p><h1>Every phase has an owner, worker, score, and review rule.</h1></div></div>
    <div class="phase-grid">
      ${rows.map((phase) => {
        const worker = backendData.workers.find((candidate) => candidate.phase_id === phase.id);
        return `<article class="phase-card">
          <div class="panel-title"><strong>${phase.name}</strong><small>${phase.status}</small></div>
          <p>${phase.objective || phase.description || "Managed operating-system phase."}</p>
          <dl>
            <div><dt>Managed by</dt><dd>${worker?.name || phase.owner_role || "Human owner"}</dd></div>
            <div><dt>Readiness</dt><dd>${phase.automation_score || 0}%</dd></div>
            <div><dt>Risk</dt><dd>${phase.risk_level || "medium"}</dd></div>
            <div><dt>Review</dt><dd>${phase.human_review_required ? "Required" : "Sampled"}</dd></div>
          </dl>
          ${worker ? `<button class="btn primary compact" data-run-worker="${worker.id}"><span>Run worker</span><span class="btn-mark">→</span></button>` : ""}
        </article>`;
      }).join("")}
    </div>
  `;
}

function workerRunsView() {
  const rows = backendData.workerRuns.length ? backendData.workerRuns : [
    { id: "demo-1", status: "needs_review", output_payload: { summary: "Client update draft is ready for manager approval.", draft_output: "Draft client update prepared from workflow context.", risks: ["Client-facing output"], recommended_next_steps: ["Review wording", "Approve or request changes"] } },
  ];
  return `
    <div class="canvas-heading"><div><p class="signal">Review queue</p><h1>Worker outputs stay under human control.</h1></div></div>
    <div class="review-queue">
      ${rows.map((run) => `<article class="review-item">
        <div class="panel-title"><strong>${run.output_payload?.summary || "Worker draft ready"}</strong><small>${run.status}</small></div>
        <p>${run.output_payload?.draft_output || "Draft output saved for review."}</p>
        <div class="mini-flow">${(run.output_payload?.recommended_next_steps || []).map(step => `<span>${step}</span>`).join("")}</div>
        ${run.id.startsWith?.("demo") ? "" : `<div class="backend-actions"><button class="btn primary compact" data-review-run="${run.id}" data-review-status="approved"><span>Approve</span><span class="btn-mark">✓</span></button><button class="btn secondary compact" data-review-run="${run.id}" data-review-status="rejected"><span>Reject</span><span class="btn-mark">×</span></button></div>`}
      </article>`).join("")}
    </div>
  `;
}

function simpleListView(title, label, rows, empty) {
  return `
    <div class="canvas-heading"><div><p class="signal">${label}</p><h1>${title}</h1></div></div>
    <div class="workflow-table">
      ${(rows.length ? rows : empty).map((item) => `
        <article>
          <strong>${item.name || item.title}</strong>
          <span>${item.status || "draft"}</span>
          <span>${item.type || item.reviewer_role || "workspace"}</span>
          <em>${item.risk_level || "active"}</em>
        </article>
      `).join("")}
    </div>
  `;
}

function marketplaceView() {
  return `<div class="canvas-heading"><div><p class="signal">Marketplace</p><h1>Verified operating systems for resale.</h1></div></div><div class="market-grid app-market">${["Agency Delivery OS", "Client Onboarding OS", "Recruitment Desk OS", "Ecommerce Support OS"].map((name, i) => `<article class="market-card"><div><span class="status-dot"></span><strong>${name}</strong></div><p>${["Client kickoff, delivery QA, reporting cadence.", "Intake, setup, approvals, welcome templates.", "Briefs, sourcing, screening, references.", "Ticket triage, refunds, exceptions, escalation."][i]}</p><small>Version ${i + 1}.0 · verified</small></article>`).join("")}</div>`;
}

function connectedAppsView() {
  return `
    <div class="canvas-heading">
      <div>
        <p class="signal">Connected Apps</p>
        <h1>Connect your operating system to the tools work already moves through.</h1>
      </div>
      <span class="health">${backendData.integrations.length || 0} connected</span>
    </div>
    <section class="connected-copy">
      <p>Map each phase of your process across your inbox, CRM, documents, calendars, spreadsheets, forms, project boards, payments and communication tools. Precision OS assigns workers to prepare, route, update and review the work while humans stay in control where judgement matters.</p>
      <div class="integration-actions">
        <form data-connect-app>
          <input name="provider" value="notion" hidden />
          <input name="provider_account_name" placeholder="Notion workspace name" />
          <input name="access_token" placeholder="Internal integration token" />
          <button class="btn primary compact" type="submit"><span>Connect Notion</span><span class="btn-mark">+</span></button>
        </form>
        <button class="btn secondary compact" data-notion-import><span>Import Notion sample</span><span class="btn-mark">↓</span></button>
        <button class="btn secondary compact" data-notion-export><span>Export OS to Notion</span><span class="btn-mark">↑</span></button>
      </div>
    </section>
    <div class="app-category-grid connectors-grid">
      ${connectedAppCategories.map(([category, apps]) => `
        <section class="app-category">
          <div class="panel-title"><strong>${category}</strong><small>${apps.length} apps</small></div>
          <div class="app-logo-grid">
            ${apps.map(appName => appTile(appName)).join("")}
          </div>
        </section>
      `).join("")}
    </div>
  `;
}

function appTile(appName) {
  const slug = simpleIconSlugs[appName];
  const localLogo = localLogoApps[appName];
  const connected = backendData.integrations.some((integration) => integration.provider?.toLowerCase() === appName.toLowerCase().replace(/\s+/g, ""));
  return `
    <button class="app-tile ${connected ? "connected" : ""}" data-app-name="${appName}">
      ${localLogo ? appLogo(localLogo, appName) : slug ? `<img src="https://cdn.simpleicons.org/${slug}/444444" alt="" loading="lazy" onerror="this.outerHTML='<span class=&quot;brand-logo logo-letter&quot;>•</span>'" />` : `<span class="brand-logo logo-letter">${appName.slice(0, 1)}</span>`}
      <strong>${appName}</strong>
      <small>${connected ? "Connected" : "API or bridge"}</small>
    </button>
  `;
}

function appLogo(type, appName) {
  const label = appName.replace("Microsoft ", "");
  if (type === "microsoft") {
    return `<span class="brand-logo logo-microsoft" aria-label="${appName} logo"><i></i><i></i><i></i><i></i></span>`;
  }
  if (type === "slack") {
    return `<span class="brand-logo logo-slack" aria-label="${appName} logo"><i></i><i></i><i></i><i></i></span>`;
  }
  if (type === "monday") {
    return `<span class="brand-logo logo-monday" aria-label="${appName} logo"><b></b></span>`;
  }
  return `<span class="brand-logo logo-${type}" aria-label="${appName} logo"><b>${label.slice(0, 1)}</b></span>`;
}

function analyticsView() {
  return `<div class="canvas-heading"><div><p class="signal">Analytics</p><h1>Business-process intelligence layer.</h1></div></div><div class="readiness-board app-panel">${readinessGraph()}</div>`;
}

function trackFunnelEvent(name, payload = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...payload });
  window.dispatchEvent(new CustomEvent("precision_os_event", { detail: { event: name, ...payload } }));
}

function render() {
  document.body.dataset.view = activeView;
  // Preserve focus state across re-renders so mid-typing re-renders don't wipe the cursor.
  const focusedName = document.activeElement?.name;
  const focusedSelStart = document.activeElement?.selectionStart;
  const focusedSelEnd = document.activeElement?.selectionEnd;
  app.innerHTML = activeView === "admin" ? adminDashboard() : activeView === "auth" ? authView() : activeView === "funnel" ? funnel() : activeView === "landing" ? landing() : (session?.access_token ? dashboard() : authView());
  updateBrowserPath();
  bindEvents();
  // Restore focus to the field the user was in, with cursor position preserved.
  if (focusedName && activeView === "auth") {
    const el = app.querySelector(`input[name="${focusedName}"]`);
    if (el) { el.focus(); try { el.setSelectionRange(focusedSelStart, focusedSelEnd); } catch {} }
  }
  // Operator Chat lives on <body>, outside #app, so it survives re-renders.
  document.querySelectorAll(".op-chat-panel, .op-chat-fab").forEach(el => el.remove());
  if (typeof canAccessAdmin === "function" && canAccessAdmin() && ["dashboard", "admin"].includes(activeView)) {
    document.body.insertAdjacentHTML("beforeend", operatorChatPanel());
    bindOperatorChat();
    const log = document.getElementById("op-chat-log");
    if (log) log.scrollTop = log.scrollHeight;
  }
  requestAnimationFrame(() => document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible")));
}

async function ensureDeliveryPath(agentType) {
  const acc = backendData.agentCommandCentre;
  const deliveryPath = acc?.agent_run_jobs?.find?.(item => item.delivery_path_id)?.delivery_path_id;
  if (deliveryPath) return deliveryPath;
  const created = await apiRequest("/delivery-paths", {
    method: "POST",
    body: JSON.stringify({
      workspace_id: workspace.id,
      client_name: workspace.name || "Precision OS Internal",
      offer_type: agentType === "Dead Lead Reactivation Agent" ? "Dead Lead Reactivation OS" : "Guided Workflow Sprint",
      current_stage: "New submission",
      next_agent_type: agentType,
      next_action: `Run ${agentType}`,
      review_gate_required: true,
    }),
  });
  return created.id || null;
}

async function createAndRunAgent(agentType, options = {}) {
  if (!canAccessAdmin()) throw new Error("Workspace owner/admin access is required.");
  if (!backendData.uploads.length && !options.allowWithoutSources) {
    throw new Error("Upload or paste at least one SOP/source before running delivery agents.");
  }
  const deliveryPathId = options.deliveryPathId || await ensureDeliveryPath(agentType);
  const task = await apiRequest("/agent-tasks", {
    method: "POST",
    body: JSON.stringify({
      workspace_id: workspace.id,
      title: `${agentType} delivery task`,
      client_name: workspace.name || "Precision OS Internal",
      assigned_agent_type: agentType,
      priority: agentType.includes("QA") ? "high" : "normal",
      status: "queued",
      input_files: backendData.uploads.slice(0, 3).map(source => ({ id: source.id, file_name: source.file_name })),
      required_output: `${agentType} structured output`,
      review_required: true,
      metadata: { offer_type: agentType === "Dead Lead Reactivation Agent" ? "dead_lead_reactivation" : "guided_workflow_sprint" },
    }),
  });
  const job = await apiRequest("/agent-run-jobs", {
    method: "POST",
    body: JSON.stringify({
      workspace_id: workspace.id,
      delivery_path_id: deliveryPathId,
      agent_task_id: task.id,
      agent_type: agentType,
      status: "queued",
      input_payload: {
        source_ids: backendData.uploads.slice(0, 3).map(source => source.id),
        offer_type: task.metadata?.offer_type || "guided_workflow_sprint",
      },
      human_review_required: true,
      confidence: 80,
    }),
  });
  const result = await apiRequest(`/agent-run-jobs/${job.id}/run`, {
    method: "POST",
    body: JSON.stringify({
      run_type: "delivery_agent",
      package_allowance: "Guided Workflow Sprint",
      package_allowance_used: `${agentType} run`,
    }),
  });
  return result;
}

async function runAgentChain(firstAgentType, options = {}) {
  let result = await createAndRunAgent(firstAgentType, options);
  const events = [[firstAgentType, result.output?.summary || "Structured output saved.", result.validation_status || result.job?.status || "complete", "usage logged"]];
  for (let i = 0; i < 8; i += 1) {
    const nextJobId = result.derived?.next_job?.id || result.job?.output_payload?.next_job_id;
    if (!nextJobId) break;
    const nextAgentType = result.derived?.next_agent_type || result.job?.output_payload?.next_agent_type || "Next Agent";
    result = await apiRequest(`/agent-run-jobs/${nextJobId}/run`, {
      method: "POST",
      body: JSON.stringify({
        run_type: "delivery_agent",
        package_allowance: "Guided Workflow Sprint",
        package_allowance_used: `${nextAgentType} run`,
      }),
    });
    events.unshift([nextAgentType, result.output?.summary || "Structured output saved.", result.validation_status || result.job?.status || "complete", "usage logged"]);
  }
  return events;
}

async function runSopDeliveryTest() {
  if (!canAccessAdmin()) throw new Error("Sign in as a workspace owner/admin first.");
  const testSop = [
    "Precision OS client onboarding SOP",
    "Goal: turn a new Guided Workflow Sprint purchase into a client-ready operating pack.",
    "Trigger: client buys a Guided Workflow Sprint and submits process notes.",
    "Step 1: Intake Agent reviews payment state, selected offer, uploaded SOPs, workflow goal and missing information.",
    "Step 2: Workflow Mapping Agent maps trigger, phases, owners, handoffs, inputs, outputs and review gates.",
    "Step 3: Procedure Builder Agent creates 3 to 5 procedures with steps, checklists, quality standards and escalation rules.",
    "Step 4: Worker Design Agent creates 2 to 3 AI worker cards with allowed tasks, restricted tasks, review rules and escalation rules.",
    "Step 5: Template Builder Agent creates client update, internal handoff and checklist templates.",
    "Step 6: QA Agent checks scope, missing facts, review gates, hallucination risk, package limits and client readiness.",
    "Step 7: Client Handoff Agent creates the final handover summary, assets list, next actions and expansion recommendation.",
    "Definition of done: workflow map, procedures, workers, templates, review gates, QA report and handover summary are saved."
  ].join("\n");
  const source = await apiRequest("/uploads", {
    method: "POST",
    body: JSON.stringify({
      workspace_id: workspace.id,
      file_name: "Precision OS Internal Client Onboarding SOP.txt",
      file_type: "text/plain",
      source_type: "internal_test_sop",
      raw_text: testSop,
    }),
  });
  await refreshBackendData();
  agentRunLog = [[
    "SOP Delivery Test",
    `Uploaded ${source.file_name}. Starting real agent chain.`,
    "running",
    "backend",
  ]];
  return runAgentChain("Intake Agent", { allowWithoutSources: true });
}

function bindEvents() {
  document.querySelectorAll("[data-view]").forEach(el => el.addEventListener("click", event => {
    event.preventDefault();
    let next = el.dataset.view;
    const scrollTarget = el.dataset.scrollTarget;
    if (next === "auth") authMode = "login";
    // Dashboard is a protected route — unauthenticated users go to login.
    if (next === "dashboard" && !session?.access_token) {
      next = "auth";
      authMode = "login";
      backendStatus = { state: "idle", message: "" };
    }
    activeView = next;
    window.scrollTo({ top: 0, behavior: "smooth" });
    render();
    if (scrollTarget) document.querySelector(scrollTarget)?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (activeView === "dashboard") refreshBackendData();
  }));
  function saveAuthDraftFromInput(input) {
    const form = input.closest("[data-auth]");
    if (!form) return;
    const mode = form.dataset.auth;
    authDraft[mode] = { ...authDraft[mode], [input.name]: input.value };
  }
  document.querySelectorAll(".auth-page-form input").forEach(input => {
    input.addEventListener("input", () => saveAuthDraftFromInput(input));
    // `change` fires for browser autofill (Chrome/Safari), which may skip `input`
    input.addEventListener("change", () => saveAuthDraftFromInput(input));
  });
  document.querySelectorAll("[data-admin-logout]").forEach(button => button.addEventListener("click", () => {
    session = null;
    workspace = null;
    deliverySimulationLoaded = false;
    agentRunLog = [];
    localStorage.removeItem("precision_os_session");
    localStorage.removeItem("precision_os_workspace");
    adminStatus = { state: "idle", message: "Admin session ended." };
    activeView = "admin";
    render();
  }));
  document.querySelectorAll("[data-scroll]").forEach(el => el.addEventListener("click", event => {
    event.preventDefault();
    document.querySelector(el.dataset.scroll)?.scrollIntoView({ behavior: "smooth", block: "center" });
  }));
  document.querySelectorAll("[data-funnel-scroll]").forEach(el => el.addEventListener("click", event => {
    event.preventDefault();
    if (el.dataset.track) trackFunnelEvent(el.dataset.track, { path: selectedFunnelPath });
    if (el.dataset.formPath) {
      formPath = el.dataset.formPath;
      selectedFunnelPath = formPath;
      activeFunnelTab = formPath;
    }
    document.querySelector(el.dataset.funnelScroll)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }));
  document.querySelectorAll("[data-funnel-path]").forEach(button => button.addEventListener("click", () => {
    selectedFunnelPath = button.dataset.funnelPath;
    formPath = selectedFunnelPath;
    activeFunnelTab = selectedFunnelPath;
    funnelFormSubmitted = false;
    const selected = funnelOptions.find(option => option.key === selectedFunnelPath);
    trackFunnelEvent(selected?.event || "offer_card_clicked", { path: selectedFunnelPath });
    trackFunnelEvent("offer_card_clicked", { path: selectedFunnelPath });
    render();
  }));
  document.querySelectorAll("[data-diagnostic]").forEach(button => button.addEventListener("click", () => {
    diagnosticChoice = button.dataset.diagnostic;
    const selected = diagnosticOptions.find(([key]) => key === diagnosticChoice);
    if (selected) {
      selectedFunnelPath = selected[2];
      formPath = selected[2];
      activeFunnelTab = selected[2];
    }
    trackFunnelEvent("diagnostic_completed", { choice: diagnosticChoice, recommended_path: selectedFunnelPath });
    render();
  }));
  document.querySelectorAll("[data-funnel-tab]").forEach(button => button.addEventListener("click", () => {
    activeFunnelTab = button.dataset.funnelTab;
    render();
    document.querySelector("#system-preview")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }));
  document.querySelectorAll("[data-funnel-module]").forEach(button => {
    const activateModule = () => {
      activeFunnelModule = button.dataset.funnelModule;
      trackFunnelEvent("module_preview_selected", { module: activeFunnelModule });
      render();
    };
    button.addEventListener("click", activateModule);
  });
  document.querySelectorAll("[data-form-path]").forEach(el => el.addEventListener("click", () => {
    formPath = el.dataset.formPath;
    selectedFunnelPath = formPath;
    activeFunnelTab = formPath;
    funnelFormSubmitted = false;
    trackFunnelEvent(formPath === "dead-leads" ? "path_selected_dead_leads" : "path_selected_workflow", { source: "form_path" });
    render();
    document.querySelector("#start")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }));
  document.querySelectorAll("[data-funnel-form]").forEach(form => form.addEventListener("focusin", () => {
    if (!form.dataset.started) {
      form.dataset.started = "true";
      trackFunnelEvent("form_started", { path: formPath });
    }
  }));
  document.querySelectorAll("[data-funnel-form]").forEach(form => form.addEventListener("submit", event => {
    event.preventDefault();
    const formData = new FormData(form);
    trackFunnelEvent("form_submitted", { path: formPath, industry: formData.get("industry") || "" });
    funnelFormSubmitted = true;
    render();
    document.querySelector("#start")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }));
  document.querySelectorAll("[data-placeholder-action]").forEach(button => button.addEventListener("click", () => {
    const action = button.dataset.placeholderAction;
    trackFunnelEvent(action === "deposit" ? "deposit_clicked" : "upload_clicked", { action, path: formPath });
  }));
  document.querySelectorAll("[data-auth-mode]").forEach(el => el.addEventListener("click", event => {
    event.preventDefault();
    authMode = el.dataset.authMode;
    backendStatus = { state: "idle", message: "" };
    activeView = "auth";
    render();
  }));
  document.querySelectorAll("[data-offer]").forEach(el => el.addEventListener("click", event => {
    event.preventDefault();
    activeDashboard = el.dataset.offer === "dead-lead-reactivation-os" ? "Dead Leads" : "Upload SOP / Source";
    if (!session?.access_token) {
      activeView = "auth";
      authMode = "signup";
      backendStatus = { state: "idle", message: "Create your workspace to start this offer." };
      render();
      return;
    }
    activeView = "dashboard";
    window.scrollTo({ top: 0, behavior: "smooth" });
    render();
    if (session?.access_token) refreshBackendData();
  }));
  document.querySelectorAll("[data-demo]").forEach(el => el.addEventListener("click", () => {
    activeDemo = Number(el.dataset.demo);
    render();
    document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth", block: "center" });
  }));
  document.querySelectorAll("[data-map-node]").forEach(button => button.addEventListener("click", () => {
    activeMapNode = Number(button.dataset.mapNode);
    render();
  }));
  document.querySelectorAll("[data-section]").forEach(el => el.addEventListener("click", () => {
    activeDashboard = el.dataset.section;
    activeView = "dashboard";
    render();
    if (session?.access_token) refreshBackendData();
  }));
  document.querySelectorAll("[data-board-section]").forEach(el => el.addEventListener("click", () => {
    activeBoardSection = el.dataset.boardSection;
    activeAdminSection = "Executive Board";
    activeView = "admin";
    render();
  }));
  document.querySelectorAll("[data-admin-section]").forEach(el => el.addEventListener("click", () => {
    activeAdminSection = el.dataset.adminSection;
    activeView = "admin";
    render();
  }));
  document.querySelectorAll("[data-board-context]").forEach(el => el.addEventListener("click", () => {
    activeBoardContext = el.dataset.boardContext;
    render();
  }));
  document.querySelectorAll("[data-load-delivery-demo]").forEach(button => button.addEventListener("click", () => {
    deliverySimulationLoaded = true;
    activeView = "admin";
    activeDashboard = "Agent Command Centre";
    render();
  }));
  document.querySelectorAll("[data-reset-delivery-demo]").forEach(button => button.addEventListener("click", () => {
    deliverySimulationLoaded = false;
    agentRunLog = [];
    activeView = "admin";
    activeDashboard = "Agent Command Centre";
    render();
  }));
  document.querySelectorAll("[data-agent-run], [data-agent-rerun]").forEach(button => button.addEventListener("click", () => {
    const agentName = button.dataset.agentRun || button.dataset.agentRerun;
    const agentType = agentTypeFromRunLabel(agentName);
    const rerun = Boolean(button.dataset.agentRerun);
    backendStatus = { state: "loading", message: `${rerun ? "Rerunning" : "Running"} ${agentType} on the backend...` };
    agentRunLog = [[agentType, "Backend job queued.", "running", "usage pending"], ...agentRunLog].slice(0, 8);
    render();
    createAndRunAgent(agentType)
      .then(async result => {
        deliverySimulationLoaded = false;
        agentRunLog = [
          [agentType, result.output?.summary || "Structured output saved and routed.", result.validation_status || result.job?.status || "complete", "usage logged"],
          ...agentRunLog.filter(row => row[1] !== "Backend job queued."),
        ].slice(0, 8);
        backendStatus = { state: "ready", message: `${agentType} completed. Output saved to backend.` };
        await refreshBackendData();
      })
      .catch(error => {
        backendStatus = { state: "error", message: error.message };
        agentRunLog = [[agentType, error.message, "failed", "usage not logged"], ...agentRunLog].slice(0, 8);
        render();
      });
  }));
  document.querySelectorAll("[data-run-sop-test]").forEach(button => button.addEventListener("click", () => {
    backendStatus = { state: "loading", message: "Running internal SOP delivery test through the real backend..." };
    agentRunLog = [["SOP Delivery Test", "Uploading internal test SOP and starting agent chain.", "running", "backend"], ...agentRunLog].slice(0, 8);
    render();
    runSopDeliveryTest()
      .then(async events => {
        deliverySimulationLoaded = false;
        agentRunLog = [...events, ...agentRunLog.filter(row => row[0] !== "SOP Delivery Test")].slice(0, 10);
        backendStatus = { state: "ready", message: "SOP Delivery Test completed. Review outputs, QA and handover state." };
        await refreshBackendData();
      })
      .catch(error => {
        backendStatus = { state: "error", message: error.message };
        agentRunLog = [["SOP Delivery Test", error.message, "failed", "backend"], ...agentRunLog].slice(0, 8);
        render();
      });
  }));
  document.querySelectorAll("[data-auth]").forEach(form => form.addEventListener("submit", async event => {
    event.preventDefault();
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    authDraft[form.dataset.auth] = { ...authDraft[form.dataset.auth], ...payload };
    backendStatus = { state: "loading", message: form.dataset.auth === "signup" ? "Creating workspace..." : "Signing in..." };
    render();
    try {
      const data = await apiRequest(`/auth/${form.dataset.auth}`, { method: "POST", body: JSON.stringify(payload) });
      if (data.session) saveSession(data.session);
      if (data.access_token) saveSession(data);
      authDraft = {
        login: { email: "", password: "" },
        signup: { email: "", password: "", workspace_name: "", industry: "" },
      };
      backendStatus = { state: "ready", message: "Authenticated. Loading workspace..." };
      if (activeView === "auth") {
        activeView = "dashboard";
        render();
      }
      await refreshBackendData();
    } catch (error) {
      backendStatus = { state: "error", message: error.message };
      render();
    }
  }));
  document.querySelectorAll("[data-oauth]").forEach(button => button.addEventListener("click", async () => {
    backendStatus = { state: "loading", message: `Opening ${button.dataset.oauth} sign in...` };
    render();
    try {
      const data = await apiRequest("/auth/oauth", {
        method: "POST",
        body: JSON.stringify({
          provider: button.dataset.oauth,
          redirect_to: window.location.origin,
        }),
      });
      if (!data.url) throw new Error("OAuth provider is not configured yet.");
      window.location.href = data.url;
    } catch (error) {
      backendStatus = { state: "error", message: error.message };
      render();
    }
  }));
  document.querySelectorAll("[data-refresh-backend]").forEach(button => button.addEventListener("click", refreshBackendData));
  document.querySelectorAll("[data-logout]").forEach(button => button.addEventListener("click", () => {
    session = null;
    workspace = null;
    backendData = { dashboard: null, uploads: [], operatingSystems: [], workflows: [], phases: [], procedures: [], workers: [], workerRuns: [], templates: [], reviewGates: [], integrations: [], appConnections: [], agentCommandCentre: null };
    localStorage.removeItem("precision_os_session");
    localStorage.removeItem("precision_os_workspace");
    activeView = "funnel";
    render();
  }));
  document.querySelectorAll("[data-capture]").forEach(form => form.addEventListener("submit", async event => {
    event.preventDefault();
    const formData = new FormData(form);
    const file = formData.get("file");
    let contentBase64 = "";
    if (file && file.size) {
      contentBase64 = await fileToBase64(file);
    }
    const payload = {
      workspace_id: workspace?.id,
      file_name: file?.size ? file.name : "Pasted process knowledge",
      file_type: file?.size ? file.type : "text/plain",
      source_type: file?.size ? "file" : "pasted_text",
      content_base64: contentBase64,
      raw_text: formData.get("raw_text"),
    };
    backendStatus = { state: "loading", message: "Uploading and extracting process knowledge..." };
    render();
    try {
      const source = await apiRequest("/uploads", { method: "POST", body: JSON.stringify(payload) });
      backendStatus = { state: "loading", message: "Running Knowledge Extraction Engine..." };
      render();
      await apiRequest("/analyse-source", {
        method: "POST",
        body: JSON.stringify({
          source_id: source.id,
          workspace_id: workspace.id,
          industry: formData.get("industry"),
          workflow_type: formData.get("workflow_type"),
        }),
      });
      backendStatus = { state: "ready", message: "Analysis complete. Workflow, procedures, workers, templates, and review gates saved." };
      activeDashboard = "Workflows";
      await refreshBackendData();
    } catch (error) {
      backendStatus = { state: "error", message: error.message };
      render();
    }
  }));
  document.querySelectorAll("[data-run-worker]").forEach(button => button.addEventListener("click", async () => {
    backendStatus = { state: "loading", message: "Running worker and routing output to review if required..." };
    render();
    try {
      await apiRequest(`/workers/${button.dataset.runWorker}/run`, {
        method: "POST",
        body: JSON.stringify({ input_payload: { note: "Run from Precision OS dashboard." } }),
      });
      backendStatus = { state: "ready", message: "Worker draft created. Check Review Queue for approval." };
      activeDashboard = "Review Queue";
      await refreshBackendData();
    } catch (error) {
      backendStatus = { state: "error", message: error.message };
      render();
    }
  }));
  document.querySelectorAll("[data-review-run]").forEach(button => button.addEventListener("click", async () => {
    backendStatus = { state: "loading", message: "Updating worker output review status..." };
    render();
    try {
      await apiRequest(`/worker-runs/${button.dataset.reviewRun}/review`, {
        method: "PATCH",
        body: JSON.stringify({ status: button.dataset.reviewStatus }),
      });
      backendStatus = { state: "ready", message: `Worker output ${button.dataset.reviewStatus}.` };
      await refreshBackendData();
    } catch (error) {
      backendStatus = { state: "error", message: error.message };
      render();
    }
  }));
  document.querySelectorAll("[data-connect-app]").forEach(form => form.addEventListener("submit", async event => {
    event.preventDefault();
    const formData = new FormData(form);
    if (!workspace) return;
    backendStatus = { state: "loading", message: "Connecting app..." };
    render();
    try {
      await apiRequest("/integrations/connect", {
        method: "POST",
        body: JSON.stringify({
          workspace_id: workspace.id,
          provider: formData.get("provider"),
          provider_account_name: formData.get("provider_account_name"),
          access_token: formData.get("access_token"),
          scopes: ["read", "write"],
        }),
      });
      backendStatus = { state: "ready", message: "Integration connected." };
      await refreshBackendData();
    } catch (error) {
      backendStatus = { state: "error", message: error.message };
      render();
    }
  }));
  document.querySelectorAll("[data-notion-import]").forEach(button => button.addEventListener("click", async () => {
    if (!workspace) return;
    backendStatus = { state: "loading", message: "Importing Notion resources..." };
    render();
    try {
      await apiRequest("/integrations/notion/import", {
        method: "POST",
        body: JSON.stringify({
          workspace_id: workspace.id,
          raw_text: "Imported process notes from Notion. Replace this with selected Notion page content once OAuth browsing is enabled.",
          resources: [{ resource_type: "page", title: "Client Delivery Playbook", url: "https://notion.so/example" }],
        }),
      });
      backendStatus = { state: "ready", message: "Notion resources imported as process sources." };
      activeDashboard = "Upload SOP / Source";
      await refreshBackendData();
    } catch (error) {
      backendStatus = { state: "error", message: error.message };
      render();
    }
  }));
  document.querySelectorAll("[data-notion-export]").forEach(button => button.addEventListener("click", async () => {
    if (!workspace || !backendData.operatingSystems[0]) return;
    const notion = backendData.integrations.find((integration) => integration.provider === "notion");
    backendStatus = { state: "loading", message: "Creating Notion export record..." };
    render();
    try {
      await apiRequest("/integrations/notion/export", {
        method: "POST",
        body: JSON.stringify({
          workspace_id: workspace.id,
          integration_id: notion?.id,
          operating_system_id: backendData.operatingSystems[0].id,
        }),
      });
      backendStatus = { state: "ready", message: "Operating system export prepared for Notion." };
      await refreshBackendData();
    } catch (error) {
      backendStatus = { state: "error", message: error.message };
      render();
    }
  }));
}

// ─── Executive Agent Board ────────────────────────────────────────────────────

const boardAgents = [
  {
    id: "ceo",
    name: "CEO Agent",
    role: "Strategy, priorities and founder focus",
    mission: "Keep Precision OS on the highest-leverage path to revenue. Remove distraction. Convert founder thinking into clear weekly priorities.",
    decisionArea: "Company direction, sequencing, prioritisation, stop-doing",
    inputs: ["revenue", "pipeline status", "delivery capacity", "active blockers", "customer feedback", "founder notes", "weekly goals"],
    daily: ["Review revenue and pipeline delta", "Check open blockers across delivery and tech", "Update founder focus list", "Flag any drift from weekly priorities"],
    weekly: ["Produce weekly priority memo", "Update decision log", "Review stop-doing list", "Assess next 3 moves", "Check launch readiness against offer targets"],
    monthly: ["Full strategy review", "Pricing and offer assessment", "Hiring/outsourcing signal check", "Market positioning update"],
    outputs: ["Weekly priority memo", "Decision log", "Founder focus list", "Stop-doing list", "Risk summary", "Next 3 moves"],
    kpis: ["Weekly priorities completed %", "Revenue vs target", "Launch readiness score", "Blockers removed", "Founder time on highest-leverage work"],
    tools: ["Delivery status data", "Revenue ledger", "Pipeline report", "Founder notes"],
    approvalRequired: ["Major strategy shifts", "Pricing changes", "Hiring decisions", "Partner deals", "Product direction changes"],
    escalation: "Escalate to founder if revenue is >20% off target, a major blocker exceeds 5 days unresolved, or a strategic decision requires commercial commitment.",
    dod: "Weekly priority memo published. Blockers have owner and due date. Founder focus list has ≤5 items. Decision log updated.",
    prompt: "You are the CEO Agent for Precision OS. Your job is to keep the company focused on the highest-leverage path to revenue. Be direct, commercially realistic and ruthless with priorities. Do not suggest extra features unless they clearly improve launch revenue, delivery speed or customer conversion.",
    status: "active",
    kpiValues: [["Priorities completed", "4/5"], ["Revenue", "$12.4k"], ["Blockers removed", "3"], ["Launch readiness", "76%"]],
  },
  {
    id: "coo",
    name: "COO Agent",
    role: "Internal operations and delivery execution",
    mission: "Make sure every client, task, agent output and approval item has a clear next action. No stuck work. No silent blockers.",
    decisionArea: "Delivery flow, task ownership, intake-to-delivered pipeline",
    inputs: ["agent task queue", "client workspaces", "delivery statuses", "missing info list", "QA queue", "client approvals", "scope warnings"],
    daily: ["Review all active workspaces for stuck items", "Update delivery status board", "Identify missing info blockers", "Flag QA queue overload"],
    weekly: ["Produce delivery status report", "Review handoff notes", "Recommend process improvements", "Report hours per client"],
    monthly: ["Delivery margin review", "Bottleneck analysis", "SOP update recommendations"],
    outputs: ["Daily ops board", "Stuck task list", "Delivery status report", "Next-action queue", "Handoff notes", "Process improvement recommendations"],
    kpis: ["Intake-to-first-output hours", "Time in QA", "Blocked workspaces count", "Missing info turnaround hours", "Delivery hours per client", "Client-ready outputs delivered"],
    tools: ["Agent Command Centre", "Delivery pipeline", "Client workspace data", "QA queue"],
    approvalRequired: ["Changing delivery scope", "Client escalation", "Refund or credit recommendation", "Approving high-risk client output"],
    escalation: "Escalate to CEO if a workspace has been blocked for >48h, scope is disputed, or a client escalation is unresolvable at ops level.",
    dod: "All workspaces have next action and owner. No task stuck >24h without flag. QA queue clear or escalated.",
    prompt: "You are the COO Agent for Precision OS. Your job is to make sure every client, task, agent output and approval item has a clear next action. You do not freestyle. You operate from statuses, blockers, due dates and scope rules.",
    status: "active",
    kpiValues: [["Stuck workspaces", "1"], ["Avg QA time", "4h"], ["Delivery hrs/client", "6.2"], ["Blocked items", "2"]],
  },
  {
    id: "cto",
    name: "CTO Agent",
    role: "Architecture, backend, security and production reliability",
    mission: "Keep the system stable, secure and launchable. Prioritise working auth, upload, agent execution and database integrity over shiny UI.",
    decisionArea: "Technical architecture, security, deployment, API integrity",
    inputs: ["codebase status", "API route list", "database schema", "auth status", "build logs", "agent execution status", "security warnings"],
    daily: ["Check build and deploy status", "Review agent job success rate", "Monitor auth stability", "Flag any failed agent runs"],
    weekly: ["Technical priority list", "Backend audit summary", "Deployment checklist review", "Security issue log"],
    monthly: ["Stack review", "Paid infrastructure cost review", "Performance and uptime report"],
    outputs: ["Technical priority list", "Backend audit", "Deployment checklist", "Security issues", "Bug triage", "Engineering implementation prompts"],
    kpis: ["Build success rate", "Auth stability %", "API uptime %", "Agent job success rate", "Failed agent runs", "Unresolved production blockers"],
    tools: ["Codebase", "Netlify deploy logs", "Supabase DB", "API route monitor", "Error logs"],
    approvalRequired: ["Major stack changes", "Adding paid infrastructure", "Exposing new public APIs", "Changing auth or security model", "Integrating new third-party vendors"],
    escalation: "Escalate to founder if a production blocker affects paying clients, a security vulnerability is confirmed, or infrastructure cost spikes unexpectedly.",
    dod: "No unresolved production blockers. Build passing. Auth stable. Agent jobs running at >95% success.",
    prompt: "You are the CTO Agent for Precision OS. Your job is to make the system stable, secure and launchable. Prioritise working auth, upload, agent execution, database integrity and deployment over shiny UI features. Be blunt about scaffold versus real functionality.",
    status: "reviewing",
    kpiValues: [["Build success", "94%"], ["API uptime", "99.1%"], ["Agent success", "97%"], ["Prod blockers", "1"]],
  },
  {
    id: "cpo",
    name: "CPO / Product Agent",
    role: "Product experience, user flows and offer clarity",
    mission: "Turn the business model into clear product flows. Keep every feature tied to the two launch offers. Remove friction and confusion.",
    decisionArea: "Feature prioritisation, UX flows, onboarding, offer-to-product translation",
    inputs: ["user feedback", "funnel analytics", "product screenshots", "workflow maps", "client journey", "offer/pricing model", "delivery SOPs"],
    daily: ["Review funnel completion rate", "Check onboarding blockers", "Log UI friction points"],
    weekly: ["Product spec update", "Feature priority list", "UX flow review", "Release checklist"],
    monthly: ["Roadmap decision", "Feature adoption report", "Pricing display review"],
    outputs: ["Product spec", "UX flow", "Feature priority list", "Product copy notes", "Acceptance criteria", "Release checklist"],
    kpis: ["Funnel completion rate", "Onboarding completion rate", "Upload success rate", "Client approval completion", "Time to first output", "Feature adoption %"],
    tools: ["Analytics", "Funnel data", "Product screenshots", "Client feedback"],
    approvalRequired: ["Changing product scope", "Changing pricing display", "Adding new modules", "Removing core features"],
    escalation: "Escalate to CEO if a product change would affect launch offer scope, pricing display or client-facing delivery promise.",
    dod: "Both launch offer flows have defined acceptance criteria. Onboarding is ≤3 steps to first output. All features traceable to a launch offer.",
    prompt: "You are the Product Agent for Precision OS. Your job is to turn the business model into clear product flows. Prioritise the two launch paths: Guided Workflow Sprint and Dead Lead Reactivation OS. Do not create unnecessary platform complexity.",
    status: "active",
    kpiValues: [["Funnel completion", "38%"], ["Onboarding complete", "71%"], ["Upload success", "94%"], ["Time to first output", "22min"]],
  },
  {
    id: "cfo",
    name: "CFO / Unit Economics Agent",
    role: "Pricing, margin, cost controls and business model health",
    mission: "Protect margin. Track CAC, ROAS, LTV, payback and gross margin. Flag unprofitable clients before they become a pattern.",
    decisionArea: "Pricing health, unit economics, usage cost, profitability per client",
    inputs: ["revenue data", "ad spend", "client plans", "usage ledger", "worker runs", "human delivery hours", "voice/SMS costs", "payment status"],
    daily: ["Check usage ledger for overages", "Review payment status", "Flag any clients near scope limit"],
    weekly: ["Weekly financial dashboard", "Margin report", "Usage overage warnings", "Client profitability report"],
    monthly: ["MRR report", "CAC and ROAS review", "LTV estimate", "Pricing review recommendation"],
    outputs: ["Weekly financial dashboard", "Margin report", "Pricing risk alerts", "Usage overage warnings", "Client profitability report", "Recommended price changes"],
    kpis: ["CAC", "ROAS", "LTV", "Payback period", "Gross margin %", "Delivery hours per client", "Worker runs per client", "MRR", "Performance revenue"],
    tools: ["Revenue ledger", "Usage logs", "Ad spend data", "Stripe / payment data", "Delivery hour tracking"],
    approvalRequired: ["Changing pricing", "Billing client for overages", "Discounting", "Refunding", "Performance fee disputes"],
    escalation: "Escalate to CEO if gross margin drops below 50%, a client is consuming 3× expected delivery hours, or a performance fee dispute is unresolvable.",
    dod: "Weekly dashboard published. No unprofitable client running without a flagged plan. Usage overages logged before next billing cycle.",
    prompt: "You are the CFO Agent for Precision OS. Your job is to protect margin. Precision OS must never offer unlimited AI, unlimited uploads, unlimited reviews, unlimited voice minutes or unlimited support. Flag anything that threatens profitability.",
    status: "active",
    kpiValues: [["MRR", "$4,200"], ["Gross margin", "64%"], ["CAC", "$380"], ["ROAS", "3.2×"]],
  },
  {
    id: "cmo",
    name: "CMO / Growth Agent",
    role: "Acquisition strategy and market positioning",
    mission: "Generate qualified demand for both launch offers. Keep messaging specific: one workflow systemised, old leads recovered. No vague AI automation copy.",
    decisionArea: "Growth channels, campaign strategy, landing page angles, message-market fit",
    inputs: ["website analytics", "lead forms", "conversion rates", "ad performance", "customer objections", "competitor notes", "sales call notes", "SEO/social output"],
    daily: ["Review inbound lead quality", "Check landing page conversion", "Log new objections from sales"],
    weekly: ["Weekly growth plan", "Campaign briefs", "Landing page recommendations", "Offer angle tests", "Channel priority list"],
    monthly: ["Full acquisition review", "CAC by channel", "Market positioning update", "Competitive messaging check"],
    outputs: ["Weekly growth plan", "Campaign briefs", "Landing page recommendations", "Offer angle tests", "Ad hooks", "Channel priority list"],
    kpis: ["Visitors", "Leads", "Qualified leads", "Cost per lead", "CAC", "Landing conversion %", "Booked calls", "Paid conversions"],
    tools: ["Website analytics", "Ad dashboards", "Lead form data", "CRM/pipeline data"],
    approvalRequired: ["Paid ad launch", "Major brand claims", "Public pricing changes", "Public case studies"],
    escalation: "Escalate to CEO if CAC exceeds $600, a channel is generating unqualified leads consistently, or a brand claim creates compliance risk.",
    dod: "Weekly growth plan published. Campaign briefs ready for approval. Channel priorities updated. No unapproved public claims live.",
    prompt: "You are the CMO Agent for Precision OS. Your job is to generate qualified demand for two offers: Guided Workflow Sprint and Dead Lead Reactivation OS. Avoid vague AI automation messaging. Sell specific outcomes: one workflow systemised, old leads recovered.",
    status: "active",
    kpiValues: [["Leads this week", "14"], ["Qualified", "6"], ["Booked calls", "3"], ["CPL", "$62"]],
  },
  {
    id: "seo",
    name: "SEO Agent",
    role: "Organic search strategy and content structure",
    mission: "Build organic demand around commercial intent keywords: workflow automation, SOP automation, AI operations, lead reactivation and sales follow-up systems.",
    decisionArea: "SEO roadmap, keyword targeting, page briefs, content calendar",
    inputs: ["target industries", "offer pages", "keyword list", "competitor pages", "search console data", "blog/content status"],
    daily: ["Monitor rank changes for target keywords", "Flag new keyword opportunities", "Check page indexing status"],
    weekly: ["SEO roadmap update", "Keyword map", "Page briefs", "Content calendar", "Internal linking plan"],
    monthly: ["Full organic traffic report", "Content gap analysis", "Schema and technical SEO review"],
    outputs: ["SEO roadmap", "Keyword map", "Page briefs", "Internal linking plan", "Content calendar", "Meta titles/descriptions", "Schema recommendations"],
    kpis: ["Organic traffic", "Keyword rankings", "Impressions", "Clicks", "Qualified organic leads", "Page conversion rate"],
    tools: ["Google Search Console", "Keyword research tools", "Competitor analysis", "Site audit tools"],
    approvalRequired: ["Publishing new strategic pages", "Compliance or result claims", "Case studies", "Pricing or offer wording"],
    escalation: "Escalate to CMO if organic traffic drops >15% week-on-week or a core page loses top-10 ranking without explanation.",
    dod: "SEO roadmap covers next 30 days. Keyword map has commercial-intent priority tiers. All live pages have reviewed meta data.",
    prompt: "You are the SEO Agent for Precision OS. Your job is to build organic demand around workflow automation, SOP automation, AI operations systems, client onboarding SOPs, lead reactivation and sales follow-up systems. Focus on commercial search intent, not generic AI news.",
    status: "building",
    kpiValues: [["Organic visitors", "1,240"], ["Ranked keywords", "38"], ["Top-10 keywords", "7"], ["Organic leads", "4"]],
  },
  {
    id: "social",
    name: "Social Media Agent",
    role: "Organic social content and founder-led distribution",
    mission: "Turn the build-in-public journey into operator-focused content that attracts agencies, consultants, trades teams and service businesses. Not generic AI influencer content.",
    decisionArea: "Content calendar, post copy, platform strategy, engagement quality",
    inputs: ["founder notes", "product updates", "screenshots", "customer problems", "sales objections", "case study data", "market observations"],
    daily: ["Generate post drafts from founder inputs", "Monitor inbound DMs for qualified enquiries", "Log engagement quality signals"],
    weekly: ["Content calendar update", "Short-form scripts", "Carousel outlines", "Hook library", "Reply/comment suggestions"],
    monthly: ["Platform performance review", "Content format test results", "Audience quality analysis"],
    outputs: ["Daily post drafts", "Short-form scripts", "Carousel outlines", "Content calendar", "Hooks", "Reply/comment suggestions"],
    kpis: ["Posts published", "Profile visits", "Inbound messages", "Qualified enquiries", "Engagement from target buyers", "Booked calls from organic"],
    tools: ["LinkedIn", "X/Twitter", "Facebook Groups", "Founder note input"],
    approvalRequired: ["Posting publicly", "Using client names or data", "Revenue or result claims", "Controversial positioning"],
    escalation: "Escalate to CMO if inbound quality drops below 1 qualified enquiry per 20 posts or a controversial post receives unexpected negative response.",
    dod: "Content calendar has 5 approved posts queued. No unapproved claims live. All posts reviewed before publish.",
    prompt: "You are the Social Media Agent for Precision OS. Your job is to turn the build-in-public journey into serious operator content that attracts agencies, consultants, recruiters, trades/admin teams and service businesses. Do not sound like a generic AI influencer.",
    status: "active",
    kpiValues: [["Posts this week", "5"], ["Inbound messages", "8"], ["Qualified enquiries", "2"], ["Profile visits", "340"]],
  },
  {
    id: "sales",
    name: "Sales Agent",
    role: "Outreach, qualification and closing support",
    mission: "Qualify prospects into the right offer path. Be direct and non-pushy. Sell a first result, not a platform promise.",
    decisionArea: "Prospect qualification, offer recommendation, proposal preparation, pipeline tracking",
    inputs: ["lead list", "business website", "industry", "old lead indicators", "workflow pain", "funnel form answers", "pricing rules", "case studies"],
    daily: ["Review new inbound enquiries", "Update pipeline status", "Draft follow-up messages for stale leads", "Flag objections for CMO"],
    weekly: ["Outreach campaign", "Qualification summaries", "Proposal drafts", "Pipeline report", "Close checklist"],
    monthly: ["Revenue closed review", "Close rate analysis", "Objection library update", "Offer positioning feedback to CPO"],
    outputs: ["Prospect brief", "Outreach message", "Qualification summary", "Recommended offer", "Proposal text", "Follow-up message", "Close checklist"],
    kpis: ["Outreach sent", "Positive reply rate", "Qualified prospects", "Proposals sent", "Close rate", "Revenue closed", "Average deal size"],
    tools: ["Lead list", "CRM", "Funnel form submissions", "Pipeline tracker"],
    approvalRequired: ["Sending sensitive outreach", "Custom discounting", "Contract changes", "Performance fee terms", "Promises about results"],
    escalation: "Escalate to CEO if a deal requires custom commercial terms, a prospect is requesting a feature not in scope, or a proposal has been stalled >10 days.",
    dod: "All new leads have a qualification status within 24h. All proposals have a follow-up date set. Pipeline is current.",
    prompt: "You are the Sales Agent for Precision OS. Your job is to qualify prospects into either Dead Lead Reactivation OS or Guided Workflow Sprint. Be direct, clear and non-pushy. Do not oversell autonomy. Sell a first result.",
    status: "active",
    kpiValues: [["Outreach sent", "24"], ["Qualified", "7"], ["Proposals", "3"], ["Close rate", "28%"]],
  },
  {
    id: "cs",
    name: "Customer Success Agent",
    role: "Client experience after purchase",
    mission: "Keep clients informed with clear async updates. Every message states what is done, what is waiting, what is needed and what happens next.",
    decisionArea: "Onboarding progress, client comms, approval collection, expansion identification",
    inputs: ["client workspace", "delivery status", "missing info", "agent outputs", "QA status", "client messages", "approval items"],
    daily: ["Check for unanswered client messages", "Send update to any client waiting >24h", "Log missing info and chase if needed"],
    weekly: ["Client health score update", "Onboarding completion check", "Expansion opportunity log", "Approval completion rate"],
    monthly: ["Client satisfaction review", "Churn risk assessment", "Expansion conversion report"],
    outputs: ["Client update message", "Missing info request", "Approval reminder", "Handover message", "Expansion recommendation", "Client health score"],
    kpis: ["Onboarding completion %", "Response time", "Missing info turnaround hours", "Approval completion %", "Client satisfaction score", "Expansion conversion %", "Churn risk count"],
    tools: ["Client workspace data", "Delivery pipeline", "Message history", "Approval tracker"],
    approvalRequired: ["Difficult client communication", "Refunds or issues", "Scope disputes", "Sensitive claims", "Escalations"],
    escalation: "Escalate to COO if a client has not responded to 3 messages, a scope dispute is unresolvable, or a refund request is received.",
    dod: "No client waiting >24h without an update. All approval items have a reminder sent. Expansion opportunities logged at handover.",
    prompt: "You are the Customer Success Agent for Precision OS. Your job is to keep clients informed with clear async updates. Every message should state what is done, what is waiting, what is needed, and what happens next.",
    status: "active",
    kpiValues: [["Avg response time", "3.2h"], ["Onboarding complete", "71%"], ["Approvals pending", "4"], ["Churn risk", "1"]],
  },
  {
    id: "qa",
    name: "Delivery QA Agent",
    role: "Quality control before outputs reach the client",
    mission: "Protect the Precision OS brand. Do not approve outputs that are vague, invented, out of scope, risky or not useful.",
    decisionArea: "Output quality, scope compliance, hallucination detection, client-ready approval",
    inputs: ["agent outputs", "client brief", "package scope", "uploaded sources", "generated workflows", "procedures", "templates", "workers", "review gates"],
    daily: ["Review QA queue", "Flag hallucinations or scope drift", "Approve or return outputs with notes", "Log issues for rework tracking"],
    weekly: ["QA pass rate report", "Rework analysis", "Client change request log", "Delivery quality score update"],
    monthly: ["QA process review", "Common failure pattern analysis", "QA checklist update"],
    outputs: ["QA report", "Approval decision", "Required changes list", "Risk notes", "Client-ready summary", "Handover approval"],
    kpis: ["QA pass rate %", "Issues found per output", "Rework rate %", "Client change requests", "Delivery quality score"],
    tools: ["Agent output log", "Client brief", "Scope document", "QA checklist"],
    approvalRequired: ["Marking output client-ready", "High-risk outputs", "Compliance issues", "Unclear source data", "Disputed scope"],
    escalation: "Escalate to COO if an output is out of scope and client has already paid, if hallucinations are systemic across a run, or if a compliance issue is detected.",
    dod: "All outputs in QA queue have a pass/fail decision within 4h. No client-ready mark without QA approval. Risk notes attached to all flagged outputs.",
    prompt: "You are the Delivery QA Agent for Precision OS. Your job is to protect the brand. Do not approve outputs that are vague, invented, out of scope, risky or not useful.",
    status: "blocking",
    kpiValues: [["QA pass rate", "87%"], ["Issues found", "6"], ["Rework rate", "13%"], ["Queue items", "3"]],
  },
  {
    id: "legal",
    name: "Legal / Compliance Risk Agent",
    role: "Legal, compliance, privacy, spam and claims risk flagging",
    mission: "Identify risk before it becomes a problem. Suggest safer wording. Require review gates. Flag when professional legal advice is needed. Not a lawyer.",
    decisionArea: "Campaign compliance, opt-out handling, claims review, regulated industry flags",
    inputs: ["campaign plan", "SMS copy", "voice script", "lead source notes", "opt-out status", "website claims", "client industry", "performance terms"],
    daily: ["Review any new SMS or voice campaigns in queue", "Check opt-out handling is active", "Flag regulated industry clients"],
    weekly: ["Compliance risk note", "Required review gates list", "Claim risk warnings", "Safe wording suggestions"],
    monthly: ["Full compliance audit of active campaigns", "Public claims review", "Consent framework review"],
    outputs: ["Compliance risk note", "Required review gates", "Opt-out warning", "Claim risk warning", "Recommended legal review", "Safe wording suggestion"],
    kpis: ["Risks flagged", "Opt-out handling rate %", "Complaint rate", "Campaigns blocked before risk", "Compliance review completion %"],
    tools: ["Campaign queue", "SMS copy review", "Lead source notes", "Opt-out registry"],
    approvalRequired: ["Legal interpretation", "Regulated campaigns", "Public claims", "Contract terms", "Consent disputes"],
    escalation: "Escalate to CEO immediately if a confirmed spam complaint is received, a campaign has no opt-out mechanism, or a regulated industry client has no consent documentation.",
    dod: "Every campaign in queue has a compliance note. No SMS or voice campaign launches without opt-out review. All public claims reviewed against safe wording rules.",
    prompt: "You are the Legal / Compliance Risk Agent for Precision OS. You are not a lawyer and do not give legal advice. Your job is to identify risk, suggest safer wording, require review gates and flag when professional legal advice is needed.",
    status: "reviewing",
    kpiValues: [["Risks flagged", "4"], ["Opt-out rate", "100%"], ["Complaints", "0"], ["Reviews complete", "8"]],
  },
  {
    id: "partnerships",
    name: "Partnerships Agent",
    role: "Partner channels, agency referrals and strategic alliances",
    mission: "Find leverage through agencies, consultants, SaaS tools, CRM implementers and niche operators who can distribute Precision OS workflows or marketplace packs.",
    decisionArea: "Partner identification, outreach, deal structure, referral programme, marketplace creation",
    inputs: ["target partner list", "offer model", "marketplace pack ideas", "referral terms", "integration opportunities", "inbound partner enquiries"],
    daily: ["Review inbound partner enquiries", "Follow up on active partner pipeline", "Log new partnership signals"],
    weekly: ["Partner status report", "Outreach messages", "Partnership proposals", "Referral model update"],
    monthly: ["Partner revenue review", "Marketplace opportunity assessment", "Integration partner pipeline"],
    outputs: ["Partner brief", "Outreach message", "Partnership proposal", "Referral model", "Partner status report"],
    kpis: ["Partner leads", "Partner replies", "Partner deals active", "Referred revenue", "Marketplace pack creators", "Integration opportunities"],
    tools: ["Partner pipeline tracker", "Outreach templates", "Referral tracking"],
    approvalRequired: ["Commercial terms", "Revenue share agreements", "White-label deals", "Brand use approvals", "Integration commitments"],
    escalation: "Escalate to CEO for any commercial partnership that involves revenue share, exclusivity, white-label rights or brand use.",
    dod: "Active partner pipeline has status and next action for each entry. No commercial terms sent without founder approval. Referral model documented.",
    prompt: "You are the Partnerships Agent for Precision OS. Your job is to find leverage through agencies, consultants, SaaS tools, CRM implementers and niche operators who can distribute Precision OS workflows or marketplace packs.",
    status: "building",
    kpiValues: [["Active partners", "3"], ["Partner leads", "8"], ["Referred revenue", "$2,100"], ["Deals in progress", "2"]],
  },
  {
    id: "analytics",
    name: "Data / Analytics Agent",
    role: "Measurement, dashboards and decision data",
    mission: "Turn raw product, sales and delivery data into clear decisions. Show what is working, what is blocked, what is expensive and what should be done next.",
    decisionArea: "KPI definitions, dashboard specs, funnel analysis, experiment results, forecasting",
    inputs: ["website analytics", "funnel submissions", "auth/users data", "workspaces", "agent runs", "delivery status", "usage ledger", "revenue", "campaign results"],
    daily: ["Check funnel conversion metrics", "Monitor agent run anomalies", "Flag usage spikes"],
    weekly: ["Weekly metrics report", "KPI dashboard update", "Bottleneck analysis", "Experiment result summary"],
    monthly: ["Full metrics report", "Revenue forecast", "Delivery throughput trend", "Usage cost trend"],
    outputs: ["Weekly metrics report", "KPI dashboard spec", "Bottleneck analysis", "Experiment result summary", "Forecast"],
    kpis: ["Dashboard completeness %", "Reporting accuracy", "Funnel conversion %", "Delivery throughput", "Usage trends", "Revenue metrics"],
    tools: ["Analytics platform", "Usage ledger", "Revenue data", "Agent run logs", "Funnel data"],
    approvalRequired: ["Changing KPI definitions", "Public reporting", "Financial forecasts", "Client case study numbers"],
    escalation: "Escalate to CEO if a core metric is unmeasured for >7 days, a significant funnel conversion drop is detected, or a usage cost spike has no explanation.",
    dod: "Weekly metrics report published every Monday. All core KPIs have a current value. No unmeasured launch-critical metric.",
    prompt: "You are the Data / Analytics Agent for Precision OS. Your job is to turn raw product, sales and delivery data into clear decisions. Show what is working, what is blocked, what is expensive, and what should be done next.",
    status: "active",
    kpiValues: [["Funnel conversion", "4.2%"], ["Agent run accuracy", "97%"], ["Revenue tracked", "$12.4k"], ["Dashboard coverage", "82%"]],
  },
];

const boardSections = ["Overview", "Daily Check", "Weekly Review", "Agent Roles", "Board Tasks", "Decision Log", "KPI Scorecard", "Risks", "Founder Approvals"];

const boardDecisionLog = [
  { date: "2026-06-11", agent: "CEO Agent", decision: "Focus sprint on Dead Lead Reactivation OS launch before adding new product features.", status: "approved", owner: "Founder" },
  { date: "2026-06-10", agent: "CFO Agent", decision: "Flag Atlas Roofing Co as >2× expected delivery hours. Review scope before next phase.", status: "pending", owner: "COO" },
  { date: "2026-06-09", agent: "Legal / Compliance Risk Agent", decision: "Renovation Company campaign requires source/consent documentation before SMS approval.", status: "approved", owner: "COO" },
  { date: "2026-06-08", agent: "CTO Agent", decision: "Agent job retry logic must be added before Netlify production deploy.", status: "approved", owner: "CTO" },
  { date: "2026-06-07", agent: "CPO Agent", decision: "Remove draft 'Analytics' and 'Reports' nav tabs until post-launch to reduce scope creep.", status: "approved", owner: "Founder" },
  { date: "2026-06-06", agent: "CMO Agent", decision: "Pause broad AI automation ad creative. Test specific outcome messaging: 'one workflow built' and 'old leads reactivated'.", status: "approved", owner: "CMO" },
];

const boardRisks = [
  { severity: "high", area: "Delivery", description: "Renovation Company consent/source history still missing after 48h. Campaign blocked.", agent: "COO Agent", action: "Chase client. Escalate if no response by EOD." },
  { severity: "high", area: "Legal", description: "SMS campaign for Motive Ecommerce has no confirmed opt-out column in lead CSV.", agent: "Legal / Compliance Agent", action: "Block launch. Request opt-out data before any approval." },
  { severity: "medium", area: "Finance", description: "Atlas Roofing Co delivery hours at 2.1× estimated scope. Margin risk if not controlled.", agent: "CFO Agent", action: "Review scope with COO. Consider add-on billing conversation." },
  { severity: "medium", area: "Technical", description: "One production API route returning intermittent 502 errors under load.", agent: "CTO Agent", action: "Investigate and fix before next client campaign launch." },
  { severity: "low", area: "Growth", description: "LinkedIn engagement from target buyer segment dropped 18% this week.", agent: "CMO Agent", action: "Review content format. Test direct operator angle vs. build-in-public." },
];

const boardFounderApprovals = [
  { id: "FA-001", type: "Pricing", title: "Review proposed add-on pricing for scope overages", requestedBy: "CFO Agent", urgency: "high", summary: "Delivery hours on two active clients exceed plan. CFO Agent recommends formalising a $350/h overage rate. Requires founder sign-off before client conversation.", action: "Approve pricing schedule", status: "pending" },
  { id: "FA-002", type: "Campaign", title: "Approve Renovation Company Dead Lead SMS campaign", requestedBy: "Legal / Compliance Agent", urgency: "high", summary: "Campaign assets are QA-ready. Consent documentation is now confirmed. Legal review passed with safe wording applied. Ready for founder approval to launch.", action: "Approve campaign launch", status: "pending" },
  { id: "FA-003", type: "Strategy", title: "Confirm go/no-go on LinkedIn paid ads for Guided Workflow Sprint", requestedBy: "CMO Agent", urgency: "medium", summary: "CMO Agent recommends $500 test budget on LinkedIn targeting agency owners and consultants. Requires founder approval before any spend.", action: "Approve ad test budget", status: "pending" },
  { id: "FA-004", type: "Partnership", title: "Confirm rev-share terms for HubSpot agency partner", requestedBy: "Partnerships Agent", urgency: "medium", summary: "Agency partner requesting 20% referral commission on first 3 months of any client they introduce. Partnerships Agent recommends 15% for 12 months instead.", action: "Approve partnership terms", status: "pending" },
  { id: "FA-005", type: "Delivery", title: "Mark Northstar Advisory workflow sprint as client-ready", requestedBy: "Delivery QA Agent", urgency: "low", summary: "QA passed. Operating pack includes 5 phases, 9 procedures, 3 worker cards and 4 review gates. Handover summary ready. Founder review before client send.", action: "Approve client handover", status: "pending" },
];

const boardTasks = [
  { id: "BT-001", agent: "CEO Agent", task: "Publish weekly priority memo for w/c 9 June", status: "complete", due: "Mon", priority: "high" },
  { id: "BT-002", agent: "COO Agent", task: "Resolve Renovation Company consent blocker", status: "in progress", due: "Today", priority: "urgent" },
  { id: "BT-003", agent: "CTO Agent", task: "Investigate 502 error on /api/agent-run route", status: "in progress", due: "Today", priority: "high" },
  { id: "BT-004", agent: "CFO Agent", task: "Produce weekly margin and usage report", status: "complete", due: "Mon", priority: "high" },
  { id: "BT-005", agent: "CMO Agent", task: "Produce LinkedIn and X content briefs for week", status: "complete", due: "Mon", priority: "normal" },
  { id: "BT-006", agent: "SEO Agent", task: "Submit 3 page briefs for workflow automation cluster", status: "in progress", due: "Wed", priority: "normal" },
  { id: "BT-007", agent: "Social Media Agent", task: "Prepare 5 post drafts for founder approval", status: "pending", due: "Wed", priority: "normal" },
  { id: "BT-008", agent: "Sales Agent", task: "Follow up 4 proposals outstanding >5 days", status: "in progress", due: "Today", priority: "high" },
  { id: "BT-009", agent: "Customer Success Agent", task: "Send update to Northstar Advisory on operating pack status", status: "complete", due: "Mon", priority: "normal" },
  { id: "BT-010", agent: "Delivery QA Agent", task: "QA Northstar Advisory workflow sprint pack", status: "complete", due: "Tue", priority: "high" },
  { id: "BT-011", agent: "Legal / Compliance Agent", task: "Review Motive Ecommerce SMS opt-out risk", status: "in progress", due: "Today", priority: "urgent" },
  { id: "BT-012", agent: "Partnerships Agent", task: "Send follow-up to HubSpot agency partner on rev-share terms", status: "pending", due: "Thu", priority: "normal" },
  { id: "BT-013", agent: "Data / Analytics Agent", task: "Publish weekly KPI scorecard", status: "complete", due: "Mon", priority: "high" },
  { id: "BT-014", agent: "CPO Agent", task: "Review onboarding flow after 3 client friction reports", status: "in progress", due: "Wed", priority: "high" },
];

const boardMeetingOutput = {
  board_summary: "Precision OS is revenue-active with two paying clients in delivery. One campaign is blocked by consent review. One production API issue needs immediate resolution. Launch readiness is at 76%. Founder attention is needed on 5 approval items.",
  top_priorities: [
    "Resolve Renovation Company consent/source blocker before campaign can launch",
    "Fix intermittent 502 error on /api/agent-run before next client delivery",
    "Close 4 outstanding proposals sitting >5 days",
  ],
  critical_blockers: [
    "Renovation Company SMS campaign held — consent documentation unconfirmed",
    "Motive Ecommerce campaign held — no opt-out column in lead CSV",
    "/api/agent-run returning 502 intermittently under load",
  ],
  revenue_status: "$12.4k in active delivery. MRR $4,200. 3 proposals outstanding. 2 warm leads from organic. Performance revenue pipeline: $2,100 from recovered bookings.",
  delivery_status: "2 active workspaces. Northstar Advisory: QA passed, client-ready pending founder approval. Renovation Company: blocked on consent. Bright Desk Recruiting: delivered.",
  technical_status: "Build passing. Auth stable. Agent jobs at 97% success. One 502 error under investigation. Deployment ready once API fix confirmed.",
  growth_status: "14 leads this week. 6 qualified. 3 booked calls. CPL $62. LinkedIn organic engagement down 18% — content format review needed.",
  risks: [
    "Renovation Company campaign blocked — compliance risk if launched without consent",
    "Atlas Roofing Co delivery hours at 2.1× plan — margin risk",
    "No opt-out column in Motive Ecommerce lead CSV — campaign must not launch",
  ],
  decisions_needed_from_founder: [
    "Approve overage pricing schedule ($350/h)",
    "Approve Renovation Company SMS campaign launch",
    "Approve LinkedIn ad test ($500 budget)",
    "Confirm HubSpot partnership rev-share terms",
    "Approve Northstar Advisory client handover",
  ],
  recommended_next_actions: [
    "COO: Chase Renovation Company consent today",
    "CTO: Fix 502 error before end of day",
    "Sales: Follow up all proposals >5 days today",
    "Founder: Review and approve 5 pending approval items",
  ],
  stop_doing: [
    "Adding new nav sections before launch offer flows are stable",
    "Approving campaigns without confirmed opt-out mechanism",
    "Scoping client work beyond signed package without written agreement",
  ],
  follow_up_tasks: [
    "CFO: Formalise overage billing policy document",
    "Legal: Update SMS campaign review gate checklist",
    "CPO: Reduce onboarding to ≤3 steps to first output",
    "Analytics: Add delivery margin to weekly KPI scorecard",
  ],
};

const boardContextMeta = {
  precision_os: {
    label: "Precision OS",
    tagline: "SOP-to-workflow product · Guided Workflow Sprint · Dead Lead Reactivation OS",
    focus: "SOP delivery, agent execution, funnel conversion, Dead Lead Reactivation OS launch, platform readiness and usage cost controls.",
    summary: "Precision OS is revenue-active with two paying clients in delivery. One campaign is blocked by consent review. Launch readiness at 76%.",
    priorities: [
      "Resolve Renovation Company consent/source blocker before campaign can launch",
      "Fix intermittent 502 error on /api/agent-run before next client delivery",
      "Close 4 outstanding proposals sitting >5 days",
    ],
    blockers: [
      "Renovation Company SMS campaign held — consent documentation unconfirmed",
      "Motive Ecommerce campaign held — no opt-out column in lead CSV",
      "/api/agent-run returning 502 intermittently under load",
    ],
    revenue: "$12.4k in active delivery. MRR $4,200. 3 proposals outstanding.",
    kpis: [["MRR", "$4,200"], ["Gross Margin", "64%"], ["CAC", "$380"], ["ROAS", "3.2×"], ["Funnel Conversion", "4.2%"], ["Agent Success Rate", "97%"], ["QA Pass Rate", "87%"], ["Launch Readiness", "76%"]],
  },
  rebuilt: {
    label: "Private Venture",
    tagline: "Internal venture · Launch readiness · Delivery workflow · Partner network",
    focus: "Private venture launch, paid offer fulfilment, partner onboarding, client routing, delivery QA and concierge workflows.",
    summary: "Private venture planning context. Board data is indicative — live integrations not yet wired.",
    priorities: [
      "Finalise launch checklist and go-live date",
      "Define paid offer pricing and fulfilment workflow",
      "Build partner onboarding flow",
    ],
    blockers: [
      "Private venture context not fully wired yet — showing planning data",
      "Paid offer fulfilment workflow not yet built",
      "Partner listings schema pending",
    ],
    revenue: "Pre-revenue. First paid offer targeted for Q3 2026. Partner pipeline: 3 enquiries.",
    kpis: [["Status", "Pre-launch"], ["Launch Target", "Q3 2026"], ["Partner Leads", "3"], ["Offer Pipeline", "5"], ["Paid Revenue", "$0 (planned)"], ["Concierge Leads", "2"], ["QA Queue", "4"], ["Partner Network", "Pre-enrol"]],
  },
  group: {
    label: "Group / Holdings",
    tagline: "Precision International · Cross-business capital allocation · Founder priorities · Risk register",
    focus: "Capital allocation across Precision OS and private venture work, cashflow, founder focus, cross-business risk and weekly holding company priorities.",
    summary: "Group view: Precision OS generating early revenue. Private venture in pre-launch. Capital allocation and founder time are the primary group-level decisions.",
    priorities: [
      "Allocate founder hours between Precision OS launch and private venture preparation",
      "Review cashflow position across both businesses",
      "Confirm group-level risk register is current",
    ],
    blockers: [
      "Founder time split not yet formalised between Precision OS and private venture work",
      "Group cashflow model not yet consolidated",
      "Holding company structure pending legal review",
    ],
    revenue: "Precision OS: $4,200 MRR. Private venture: $0 (pre-revenue). Group cashflow: founder-funded. Next capital event: first paid venture offer.",
    kpis: [["Precision OS MRR", "$4,200"], ["Private Venture Revenue", "$0"], ["Group Cashflow", "Founder-funded"], ["Active Businesses", "2"], ["Founder Hours: POS", "60%"], ["Founder Hours: Venture", "40%"], ["Open Legal Items", "1"], ["Risk Items", "5"]],
  },
};

function statusBadge(status) {
  const map = { active: "badge-green", complete: "badge-green", building: "badge-yellow", reviewing: "badge-yellow", pending: "badge-muted", blocking: "badge-red", "in progress": "badge-yellow", urgent: "badge-red", high: "badge-red", medium: "badge-yellow", low: "badge-muted", normal: "badge-muted", approved: "badge-green" };
  return `<span class="board-badge ${map[status] || "badge-muted"}">${status}</span>`;
}

function boardOverviewView() {
  const ctx = boardContextMeta[activeBoardContext] || boardContextMeta.precision_os;
  const isLive = activeBoardContext === "precision_os";
  const agentGrid = [
    { agent: boardAgents.find(a => a.id === "ceo"), label: "Strategy", summary: ctx.summary.split(".")[0] + "." },
    { agent: boardAgents.find(a => a.id === "coo"), label: "Delivery", summary: isLive ? "2 active workspaces. Northstar Advisory QA passed." : ctx.tagline.split("·")[0].trim() + " operations." },
    { agent: boardAgents.find(a => a.id === "cto"), label: "Technical", summary: isLive ? "Build passing. 97% agent job success rate." : "Technical scope being defined for this context." },
    { agent: boardAgents.find(a => a.id === "cfo"), label: "Finance", summary: ctx.revenue.split(".")[0] + "." },
    { agent: boardAgents.find(a => a.id === "cmo"), label: "Growth", summary: isLive ? "14 leads this week. 6 qualified. CPL $62." : "Growth plan being scoped for " + ctx.label + "." },
    { agent: boardAgents.find(a => a.id === "sales"), label: "Sales", summary: isLive ? "3 proposals outstanding. 7 qualified in pipeline." : "Pipeline definition in progress." },
    { agent: boardAgents.find(a => a.id === "qa"), label: "QA", summary: isLive ? "QA pass rate 87%. 3 items in queue." : "QA framework being scoped." },
    { agent: boardAgents.find(a => a.id === "cs"), label: "Client Success", summary: isLive ? "1 churn risk. 4 approval items pending." : "CS workflows in planning phase." },
  ];
  return `
    <div class="board-section">
      <div class="canvas-heading">
        <div>
          <p class="signal">Executive Board</p>
          <h1>Board Overview</h1>
          <p class="view-desc">Company operating status across all 14 board agents. Raw data. Clear signal. No noise.</p>
        </div>
        <button class="btn secondary compact" data-board-section="Weekly Review"><span>Weekly Review</span><span class="btn-mark">→</span></button>
      </div>

      ${activeBoardContext !== "precision_os" ? `<div class="board-context-notice">⊡ ${ctx.label} — ${ctx.focus}</div>` : ""}

      <div class="board-summary-bar">
        <article><strong>${ctx.revenue.split(".")[0]}</strong><span>Revenue</span></article>
        <article class="highlight-red"><strong>${ctx.blockers.length} blockers</strong><span>Critical</span></article>
        <article><strong>${activeBoardContext === "precision_os" ? boardFounderApprovals.length : ctx.priorities.length} pending</strong><span>${activeBoardContext === "precision_os" ? "Approvals needed" : "Priorities"}</span></article>
        <article><strong>${activeBoardContext === "precision_os" ? "76%" : activeBoardContext === "rebuilt" ? "Pre-launch" : "Active"}</strong><span>${activeBoardContext === "precision_os" ? "Launch readiness" : activeBoardContext === "rebuilt" ? "Launch status" : "Group status"}</span></article>
      </div>

      <div class="board-priorities-block">
        <strong>Top 3 priorities — ${ctx.label}</strong>
        <ol>
          ${ctx.priorities.map(p => `<li>${p}</li>`).join("")}
        </ol>
      </div>

      <div class="board-agent-grid">
        ${agentGrid.map(({ agent, label, summary }) => `
          <article class="board-agent-card" data-board-section="Agent Roles">
            <div class="bac-head">
              <span class="bac-area">${label}</span>
              ${statusBadge(agent.status)}
            </div>
            <strong>${agent.name}</strong>
            <p>${summary}</p>
            <div class="bac-kpis">
              ${agent.kpiValues.slice(0, 2).map(([k, v]) => `<span><b>${v}</b>${k}</span>`).join("")}
            </div>
          </article>
        `).join("")}
      </div>

      <div class="board-two-col">
        <div class="board-block">
          <strong class="board-block-title">Critical blockers — ${ctx.label}</strong>
          ${ctx.blockers.map(b => `<div class="board-risk-row high"><span class="risk-dot"></span><p>${b}</p></div>`).join("")}
        </div>
        <div class="board-block">
          <strong class="board-block-title">Decisions needed from founder</strong>
          ${(activeBoardContext === "precision_os" ? boardMeetingOutput.decisions_needed_from_founder : ctx.priorities).map((d, i) => `
            <div class="board-approval-row">
              <span>${i + 1}</span>
              <p>${d}</p>
              ${activeBoardContext === "precision_os" ? `<button class="btn-ghost" data-board-section="Founder Approvals">Review</button>` : ""}
            </div>
          `).join("")}
        </div>
      </div>

      <div class="board-stop-doing">
        <strong>Stop doing</strong>
        <ul>${boardMeetingOutput.stop_doing.map(s => `<li>${s}</li>`).join("")}</ul>
      </div>
    </div>
  `;
}

function boardDailyCheckView() {
  const ctx = boardContextMeta[activeBoardContext] || boardContextMeta.precision_os;
  const urgentTasks = boardTasks.filter(t => t.priority === "urgent" || t.priority === "high");
  const riskItems = boardRisks.filter(r => r.severity === "high");
  return `
    <div class="board-section">
      <div class="canvas-heading">
        <div>
          <p class="signal">Executive Board · ${ctx.label} · Daily</p>
          <h1>Daily Check</h1>
          <p class="view-desc">Top priorities, delivery blockers, technical issues and growth actions for today.</p>
        </div>
        <span class="board-date">Wed 11 June 2026</span>
      </div>

      ${activeBoardContext !== "precision_os" ? `<div class="board-context-notice">⊡ ${ctx.label} context — ${ctx.tagline}</div>` : ""}

      <div class="board-daily-grid">
        <div class="board-daily-col">
          <div class="board-block">
            <strong class="board-block-title">Top 3 today — ${ctx.label}</strong>
            ${ctx.priorities.map((p, i) => `
              <div class="board-priority-row">
                <span>${i + 1}</span>
                <p>${p}</p>
              </div>
            `).join("")}
          </div>

          <div class="board-block">
            <strong class="board-block-title">Revenue / pipeline</strong>
            <div class="board-metric-row"><span>MRR</span><strong>$4,200</strong></div>
            <div class="board-metric-row"><span>Active clients</span><strong>2</strong></div>
            <div class="board-metric-row"><span>Open proposals</span><strong>3</strong></div>
            <div class="board-metric-row"><span>Pipeline leads</span><strong>7 qualified</strong></div>
          </div>

          <div class="board-block">
            <strong class="board-block-title">Growth actions today</strong>
            ${[
              "Follow up 4 outstanding proposals",
              "Post 1 founder-led LinkedIn post (queued for approval)",
              "Review 3 new inbound enquiries",
              "Check SEO ranking delta for target keywords",
            ].map(a => `<div class="board-action-row"><span>→</span><p>${a}</p></div>`).join("")}
          </div>
        </div>

        <div class="board-daily-col">
          <div class="board-block red-border">
            <strong class="board-block-title">Delivery blockers</strong>
            ${riskItems.map(r => `
              <div class="board-risk-row ${r.severity}">
                <div class="risk-meta"><span class="risk-dot"></span><strong>${r.area}</strong>${statusBadge(r.severity)}</div>
                <p>${r.description}</p>
                <em>${r.action}</em>
              </div>
            `).join("")}
          </div>

          <div class="board-block">
            <strong class="board-block-title">Technical blockers</strong>
            ${boardMeetingOutput.critical_blockers.filter(b => b.toLowerCase().includes("api") || b.toLowerCase().includes("502")).map(b => `
              <div class="board-risk-row medium"><span class="risk-dot"></span><p>${b}</p></div>
            `).join("")}
          </div>

          <div class="board-block">
            <strong class="board-block-title">Client risks</strong>
            ${boardRisks.filter(r => r.area === "Delivery" || r.area === "Legal").map(r => `
              <div class="board-risk-row ${r.severity}">
                <div class="risk-meta"><strong>${r.area}</strong>${statusBadge(r.severity)}</div>
                <p>${r.description}</p>
              </div>
            `).join("")}
          </div>

          <div class="board-block">
            <strong class="board-block-title">Founder focus today</strong>
            ${boardMeetingOutput.decisions_needed_from_founder.slice(0, 3).map(d => `
              <div class="board-action-row"><span>⊡</span><p>${d}</p></div>
            `).join("")}
          </div>
        </div>
      </div>
    </div>
  `;
}

function boardWeeklyReviewView() {
  const sections = [
    { agent: "CEO Agent", title: "Priority memo", content: "Sprint focus: Dead Lead Reactivation OS launch. Top 3: resolve consent blocker, fix API error, close open proposals. Stop adding nav sections before launch flows are stable." },
    { agent: "COO Agent", title: "Delivery report", content: "2 active workspaces. Northstar Advisory: QA passed, awaiting founder handover approval. Renovation Company: blocked on consent. Avg delivery hours per client: 6.2h (target: 5h)." },
    { agent: "CTO Agent", title: "System status", content: "Build passing. Auth stable. 97% agent job success rate. One 502 intermittent error on /api/agent-run. Retry logic required before next production campaign deploy." },
    { agent: "CFO Agent", title: "Unit economics", content: "MRR $4,200. Gross margin 64%. CAC $380. ROAS 3.2×. Atlas Roofing Co at 2.1× planned delivery hours — margin risk flagged. Overage pricing approval needed." },
    { agent: "CMO Agent", title: "Growth report", content: "14 leads, 6 qualified, 3 booked calls, CPL $62. LinkedIn organic engagement down 18%. Recommend testing direct operator copy angle. No paid ads live." },
    { agent: "Sales Agent", title: "Pipeline report", content: "24 outreach sent. 7 qualified. 3 proposals outstanding >5 days. Close rate 28%. 2 deals stalled at commercial terms — needs CMO and CPO positioning input." },
    { agent: "Customer Success Agent", title: "CS report", content: "Avg response time 3.2h. 4 approval items pending. Northstar Advisory: expansion opportunity logged (Active Lead Follow-Up OS, $3k). 1 churn risk: Motive Ecommerce (blocked campaign)." },
    { agent: "Delivery QA Agent", title: "QA risk report", content: "QA pass rate 87%. 3 items in queue. Rework rate 13% — above 10% threshold. Common failure: missing owner assignment on handoff steps. Checklist update recommended." },
  ];
  return `
    <div class="board-section">
      <div class="canvas-heading">
        <div>
          <p class="signal">Executive Board · Weekly</p>
          <h1>Weekly Review</h1>
          <p class="view-desc">Full board report. Each agent's week summarised. Next week action plan below.</p>
        </div>
        <span class="board-date">Week of 9 June 2026</span>
      </div>

      <div class="board-weekly-grid">
        ${sections.map(s => `
          <article class="board-weekly-card">
            <div class="bwc-head">
              <strong>${s.agent}</strong>
              <span>${s.title}</span>
            </div>
            <p>${s.content}</p>
          </article>
        `).join("")}
      </div>

      <div class="board-next-week">
        <strong class="board-block-title">Next week action plan</strong>
        <div class="board-action-table">
          ${boardMeetingOutput.recommended_next_actions.map(a => `
            <div class="board-action-row">
              <span>→</span>
              <p>${a}</p>
            </div>
          `).join("")}
          ${boardMeetingOutput.follow_up_tasks.map(a => `
            <div class="board-action-row muted">
              <span>·</span>
              <p>${a}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

function boardAgentRolesView() {
  return `
    <div class="board-section">
      <div class="canvas-heading">
        <div>
          <p class="signal">Executive Board</p>
          <h1>Agent Roles</h1>
          <p class="view-desc">All 14 board agents. Role, mission, KPIs, decision rights, escalation rules and definition of done.</p>
        </div>
      </div>
      <div class="board-roles-list">
        ${boardAgents.map(agent => `
          <details class="board-agent-profile">
            <summary>
              <div class="bap-summary">
                <div class="bap-id">${agent.name}</div>
                <span class="bap-role">${agent.role}</span>
                ${statusBadge(agent.status)}
              </div>
            </summary>
            <div class="bap-body">
              <div class="bap-mission"><strong>Mission</strong><p>${agent.mission}</p></div>
              <div class="bap-cols">
                <div>
                  <strong>Decision area</strong><p>${agent.decisionArea}</p>
                  <strong>Inputs</strong>
                  <ul>${agent.inputs.map(i => `<li>${i}</li>`).join("")}</ul>
                  <strong>Outputs</strong>
                  <ul>${agent.outputs.map(o => `<li>${o}</li>`).join("")}</ul>
                </div>
                <div>
                  <strong>KPIs tracked</strong>
                  <ul>${agent.kpis.map(k => `<li>${k}</li>`).join("")}</ul>
                  <strong>Daily tasks</strong>
                  <ul>${agent.daily.map(d => `<li>${d}</li>`).join("")}</ul>
                  <strong>Weekly tasks</strong>
                  <ul>${agent.weekly.map(w => `<li>${w}</li>`).join("")}</ul>
                </div>
                <div>
                  <strong>Requires human approval for</strong>
                  <ul>${agent.approvalRequired.map(a => `<li>${a}</li>`).join("")}</ul>
                  <strong>Escalation rule</strong><p>${agent.escalation}</p>
                  <strong>Definition of done</strong><p>${agent.dod}</p>
                </div>
              </div>
              <div class="bap-prompt">
                <strong>Operating instruction</strong>
                <blockquote>${agent.prompt}</blockquote>
              </div>
            </div>
          </details>
        `).join("")}
      </div>
    </div>
  `;
}

function boardTasksView() {
  const urgentItems = boardTasks.filter(t => t.priority === "urgent");
  const inProgress = boardTasks.filter(t => t.status === "in progress");
  const complete = boardTasks.filter(t => t.status === "complete");
  const pending = boardTasks.filter(t => t.status === "pending");
  return `
    <div class="board-section">
      <div class="canvas-heading">
        <div>
          <p class="signal">Executive Board</p>
          <h1>Board Tasks</h1>
          <p class="view-desc">Recurring operating tasks across all board agents. Owner, status and due date for every item.</p>
        </div>
      </div>
      <div class="board-task-stats">
        <article><strong>${urgentItems.length}</strong><span>Urgent</span></article>
        <article><strong>${inProgress.length}</strong><span>In progress</span></article>
        <article><strong>${pending.length}</strong><span>Pending</span></article>
        <article><strong>${complete.length}</strong><span>Complete</span></article>
      </div>
      <div class="board-task-table">
        <div class="btt-head">
          <span>ID</span><span>Agent</span><span>Task</span><span>Due</span><span>Priority</span><span>Status</span>
        </div>
        ${boardTasks.map(t => `
          <div class="btt-row ${t.status === "complete" ? "btt-done" : ""} ${t.priority === "urgent" ? "btt-urgent" : ""}">
            <span class="btt-id">${t.id}</span>
            <span class="btt-agent">${t.agent.replace(" Agent", "")}</span>
            <span class="btt-task">${t.task}</span>
            <span class="btt-due">${t.due}</span>
            ${statusBadge(t.priority)}
            ${statusBadge(t.status)}
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function boardDecisionLogView() {
  return `
    <div class="board-section">
      <div class="canvas-heading">
        <div>
          <p class="signal">Executive Board</p>
          <h1>Decision Log</h1>
          <p class="view-desc">Every board-level decision recorded. Date, agent, decision, status and owner.</p>
        </div>
      </div>
      <div class="board-decision-table">
        <div class="bdt-head">
          <span>Date</span><span>Agent</span><span>Decision</span><span>Owner</span><span>Status</span>
        </div>
        ${boardDecisionLog.map(d => `
          <div class="bdt-row">
            <span class="bdt-date">${d.date}</span>
            <span class="bdt-agent">${d.agent.replace(" Agent", "")}</span>
            <p class="bdt-decision">${d.decision}</p>
            <span class="bdt-owner">${d.owner}</span>
            ${statusBadge(d.status)}
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function boardKPIScorecardView() {
  const ctx = boardContextMeta[activeBoardContext] || boardContextMeta.precision_os;
  return `
    <div class="board-section">
      <div class="canvas-heading">
        <div>
          <p class="signal">Executive Board · ${ctx.label}</p>
          <h1>KPI Scorecard</h1>
          <p class="view-desc">Live KPIs across all board functions. Revenue, delivery, growth, product and technical health.</p>
        </div>
        <span class="board-date">Week of 9 June 2026</span>
      </div>

      ${activeBoardContext !== "precision_os" ? `<div class="board-context-notice">⊡ ${ctx.label} — ${ctx.tagline}</div>` : ""}

      <div class="board-kpi-grid">
        ${boardAgents.map(agent => `
          <article class="board-kpi-card">
            <div class="bkc-head">
              <strong>${agent.name.replace(" Agent", "")}</strong>
              ${statusBadge(agent.status)}
            </div>
            ${agent.kpiValues.map(([label, value]) => `
              <div class="bkc-row">
                <span>${label}</span>
                <strong>${value}</strong>
              </div>
            `).join("")}
          </article>
        `).join("")}
      </div>

      <div class="board-kpi-summary">
        <strong class="board-block-title">${ctx.label} — Monthly metrics (June 2026)</strong>
        <div class="board-monthly-grid">
          ${ctx.kpis.map(([k, v]) => `<div class="board-monthly-row"><span>${k}</span><strong>${v}</strong></div>`).join("")}
        </div>
      </div>
    </div>
  `;
}

function boardRisksView() {
  return `
    <div class="board-section">
      <div class="canvas-heading">
        <div>
          <p class="signal">Executive Board</p>
          <h1>Risks</h1>
          <p class="view-desc">All active risks across delivery, compliance, technical and financial areas. Severity, owner and required action.</p>
        </div>
      </div>

      <div class="board-risk-counts">
        <article class="risk-count-high"><strong>${boardRisks.filter(r => r.severity === "high").length}</strong><span>High</span></article>
        <article class="risk-count-medium"><strong>${boardRisks.filter(r => r.severity === "medium").length}</strong><span>Medium</span></article>
        <article class="risk-count-low"><strong>${boardRisks.filter(r => r.severity === "low").length}</strong><span>Low</span></article>
      </div>

      <div class="board-risks-list">
        ${boardRisks.map(r => `
          <article class="board-risk-card severity-${r.severity}">
            <div class="brc-head">
              <div>
                <span class="brc-area">${r.area}</span>
                ${statusBadge(r.severity)}
              </div>
              <span class="brc-agent">${r.agent}</span>
            </div>
            <p class="brc-desc">${r.description}</p>
            <div class="brc-action">
              <strong>Required action</strong>
              <p>${r.action}</p>
            </div>
          </article>
        `).join("")}
      </div>

      <div class="board-risk-rules">
        <strong class="board-block-title">Agent decision rules — what agents cannot do autonomously</strong>
        <div class="board-rules-grid">
          ${[
            "Change pricing",
            "Spend money",
            "Publish public content",
            "Send mass outreach",
            "Launch paid ads",
            "Approve legal or compliance decisions",
            "Sign contracts",
            "Refund clients",
            "Send SMS campaigns",
            "Trigger Voice Worker calls",
            "Expose private data",
            "Mark high-risk work client-ready",
          ].map(r => `<div class="board-rule-chip">⊡ ${r}</div>`).join("")}
        </div>
      </div>
    </div>
  `;
}

function boardFounderApprovalsView() {
  return `
    <div class="board-section">
      <div class="canvas-heading">
        <div>
          <p class="signal">Executive Board</p>
          <h1>Founder Approvals</h1>
          <p class="view-desc">All items waiting for founder sign-off. Each approval is scoped, reasoned and ready to action.</p>
        </div>
        <span class="board-badge badge-red">${boardFounderApprovals.filter(a => a.status === "pending").length} pending</span>
      </div>

      <div class="board-approvals-list">
        ${boardFounderApprovals.map(a => `
          <article class="board-approval-card urgency-${a.urgency}">
            <div class="bac2-head">
              <div>
                <span class="bac2-type">${a.type}</span>
                ${statusBadge(a.urgency)}
              </div>
              <span class="bac2-id">${a.id}</span>
            </div>
            <strong>${a.title}</strong>
            <p>${a.summary}</p>
            <div class="bac2-foot">
              <span>Requested by ${a.requestedBy}</span>
              <div class="bac2-actions">
                <button class="btn primary compact"><span>${a.action}</span><span class="btn-mark">→</span></button>
                <button class="btn secondary compact"><span>Request changes</span><span class="btn-mark">↩</span></button>
              </div>
            </div>
          </article>
        `).join("")}
      </div>
    </div>
  `;
}

function executiveBoardView() {
  const ctx = boardContextMeta[activeBoardContext] || boardContextMeta.precision_os;
  const contentMap = {
    "Overview": boardOverviewView,
    "Daily Check": boardDailyCheckView,
    "Weekly Review": boardWeeklyReviewView,
    "Agent Roles": boardAgentRolesView,
    "Board Tasks": boardTasksView,
    "Decision Log": boardDecisionLogView,
    "KPI Scorecard": boardKPIScorecardView,
    "Risks": boardRisksView,
    "Founder Approvals": boardFounderApprovalsView,
  };
  const renderFn = contentMap[activeBoardSection] || boardOverviewView;
  return `
    <div class="board-shell">
      <div class="board-shell-head">
        <div class="board-shell-title">
          <strong>Executive Board</strong>
          <span>${ctx.tagline}</span>
        </div>
        <nav class="board-subnav" aria-label="Executive Board sections">
          ${boardSections.map(s => `
            <button class="${s === activeBoardSection ? "active" : ""}" data-board-section="${s}">${s}</button>
          `).join("")}
        </nav>
      </div>
      <div class="board-content">
        ${renderFn()}
      </div>
    </div>
  `;
}

// ─── End Executive Agent Board ────────────────────────────────────────────────

// ─── Operator Chat + Action Layer ─────────────────────────────────────────────

let opChatOpen = false;
let opChatBusy = false;
let opChatMessages = [];
let opChatThreadId = null;

function operatorCurrentView() {
  if (activeView === "admin") {
    return activeAdminSection === "Executive Board" ? "executive-board" : "agent-command-centre";
  }
  if (activeDashboard === "Upload SOP / Source") return "upload-source";
  return "dashboard";
}

const operatorQuickChips = {
  dashboard: [
    "What needs doing today?",
    "Show launch blockers",
    "Show pending QA",
    "Show failed agents",
    "What can we do today to make revenue?",
  ],
  "agent-command-centre": [
    "Summarise this workspace",
    "Show missing info",
    "Run the Intake Agent",
    "Review latest output",
    "Create a handover",
  ],
  "executive-board": [
    "Daily check",
    "Weekly board summary",
    "Show founder approvals",
    "What should we stop doing?",
    "What can we do today to make revenue?",
  ],
  "upload-source": [
    "Summarise uploaded sources",
    "Run workflow mapping",
    "Generate procedures",
    "Create missing info request",
  ],
};

function escapeOpHtml(text = "") {
  return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function operatorChatPanel() {
  if (!canAccessAdmin()) return "";
  const view = operatorCurrentView();
  const chips = operatorQuickChips[view] || operatorQuickChips.dashboard;

  if (!opChatOpen) {
    return `
      <button class="op-chat-fab" data-op-toggle aria-label="Open Operator Chat">
        <span class="op-fab-dot"></span> Ask Precision OS
      </button>
    `;
  }

  return `
    <aside class="op-chat-panel ${opChatBusy ? "op-busy" : ""}" aria-label="Operator Chat">
      <header class="op-chat-head">
        <div>
          <strong>Ask Precision OS</strong>
          <small>${view.replace(/-/g, " ")} · ${activeBoardContext.replace("_", " ")}</small>
        </div>
        <div class="op-head-actions">
          ${opChatBusy ? `<span class="op-status-chip running">Running</span>` : `<span class="op-status-chip">Ready</span>`}
          <button class="op-chat-close" data-op-toggle aria-label="Collapse">—</button>
        </div>
      </header>
      <div class="op-chat-log" id="op-chat-log">
        ${opChatMessages.length ? renderOpMessages() : `
          <div class="op-empty">
            <p>Command console for the live workspace. Ask what matters, run agents, create tasks, draft messages.</p>
          </div>
        `}
      </div>
      <div class="op-chips">
        ${chips.map(chip => `<button class="op-chip" data-op-chip="${escapeOpHtml(chip)}">${chip}</button>`).join("")}
      </div>
      <form class="op-chat-form" data-op-form>
        <input id="op-chat-input" type="text" autocomplete="off"
          placeholder="Ask what to do next, run an agent, review a client workspace, or create an action."
          ${opChatBusy ? "disabled" : ""} />
        <button class="op-send" type="submit" ${opChatBusy ? "disabled" : ""}>${opChatBusy ? "…" : "→"}</button>
      </form>
    </aside>
  `;
}

function renderOpMessages() {
  return opChatMessages.map((msg, index) => {
    if (msg.role === "user") {
      return `<div class="op-msg op-user"><p>${escapeOpHtml(msg.content)}</p></div>`;
    }
    const modeChip = msg.mode ? `<span class="op-mode-chip op-mode-${msg.mode}">${msg.mode}</span>` : "";
    const confirmation = msg.confirmation && !msg.confirmationResolved ? `
      <div class="op-confirm-card">
        <strong>Confirm action: ${escapeOpHtml(msg.confirmation.action_type.replace(/_/g, " "))}</strong>
        ${(msg.riskFlags || []).map(flag => `<span class="op-risk-flag">⚠ ${flag.replace(/_/g, " ")}</span>`).join("")}
        <div class="op-confirm-actions">
          <button class="op-btn-confirm" data-op-confirm="${index}">Confirm & execute</button>
          <button class="op-btn-cancel" data-op-cancel="${index}">Cancel</button>
        </div>
      </div>
    ` : "";
    const resolved = msg.confirmationResolved ? `<span class="op-resolved ${msg.confirmationResolved === "cancelled" ? "cancelled" : ""}">${msg.confirmationResolved === "cancelled" ? "Cancelled" : "✓ Executed"}</span>` : "";
    const actions = (msg.suggestedActions || []).length ? `
      <div class="op-suggested">
        ${msg.suggestedActions.map((action, ai) => `<button class="op-action-btn" data-op-suggested="${index}:${ai}">${escapeOpHtml(action.label)}</button>`).join("")}
      </div>
    ` : "";
    return `
      <div class="op-msg op-assistant">
        ${modeChip}
        <p>${escapeOpHtml(msg.content).replace(/\n/g, "<br>")}</p>
        ${confirmation}${resolved}${actions}
      </div>
    `;
  }).join("");
}

function refreshOpChat() {
  const existing = document.querySelector(".op-chat-panel, .op-chat-fab");
  if (existing) {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = operatorChatPanel();
    existing.replaceWith(wrapper.firstElementChild);
  } else if (canAccessAdmin() && ["dashboard", "admin"].includes(activeView)) {
    document.body.insertAdjacentHTML("beforeend", operatorChatPanel());
  }
  bindOperatorChat();
  const log = document.getElementById("op-chat-log");
  if (log) log.scrollTop = log.scrollHeight;
  if (opChatOpen && !opChatBusy) document.getElementById("op-chat-input")?.focus();
}

async function sendOperatorMessage(text) {
  const message = String(text || "").trim();
  if (!message || opChatBusy || !workspace) return;
  opChatMessages.push({ role: "user", content: message });
  opChatBusy = true;
  refreshOpChat();
  try {
    const result = await apiRequest("/operator-chat/message", {
      method: "POST",
      body: JSON.stringify({
        message,
        workspace_id: workspace.id,
        current_view: operatorCurrentView(),
        business_context: activeBoardContext,
        thread_id: opChatThreadId,
      }),
    });
    if (result.thread_id) opChatThreadId = result.thread_id;
    opChatMessages.push({
      role: "assistant",
      content: result.answer || "No answer returned.",
      mode: result.mode,
      confirmation: result.requires_confirmation ? result.confirmation_payload : null,
      suggestedActions: result.suggested_actions || [],
      riskFlags: result.risk_flags || [],
    });
  } catch (error) {
    opChatMessages.push({ role: "assistant", content: `Error: ${error.message}`, mode: "ask" });
  }
  opChatBusy = false;
  refreshOpChat();
}

async function confirmOperatorAction(messageIndex) {
  const msg = opChatMessages[messageIndex];
  if (!msg?.confirmation || opChatBusy) return;
  opChatBusy = true;
  refreshOpChat();
  try {
    const result = await apiRequest("/operator-chat/confirm-action", {
      method: "POST",
      body: JSON.stringify({
        workspace_id: workspace.id,
        thread_id: opChatThreadId,
        action_type: msg.confirmation.action_type,
        payload: msg.confirmation.payload,
      }),
    });
    msg.confirmationResolved = "executed";
    opChatMessages.push({ role: "assistant", content: result.message || "Action executed.", mode: "command" });
    // run_agent chains the real agent execution pipeline
    if (result.action === "run_agent" && result.next) {
      opChatMessages.push({ role: "assistant", content: "Agent job running — this can take up to a minute...", mode: "command" });
      refreshOpChat();
      try {
        await apiRequest(result.next, { method: "POST", body: JSON.stringify({ workspace_id: workspace.id }) });
        opChatMessages.push({ role: "assistant", content: "Agent run complete. Output saved to the workspace — check the Agent Command Centre for the result.", mode: "command" });
      } catch (runError) {
        opChatMessages.push({ role: "assistant", content: `Agent run failed: ${runError.message}`, mode: "command" });
      }
      refreshBackendData();
    }
  } catch (error) {
    msg.confirmationResolved = "executed";
    opChatMessages.push({ role: "assistant", content: `Action failed: ${error.message}`, mode: "command" });
  }
  opChatBusy = false;
  refreshOpChat();
}

function bindOperatorChat() {
  document.querySelectorAll("[data-op-toggle]").forEach(el => el.addEventListener("click", () => {
    opChatOpen = !opChatOpen;
    refreshOpChat();
  }));
  document.querySelector("[data-op-form]")?.addEventListener("submit", event => {
    event.preventDefault();
    const input = document.getElementById("op-chat-input");
    const value = input?.value || "";
    if (input) input.value = "";
    sendOperatorMessage(value);
  });
  document.querySelectorAll("[data-op-chip]").forEach(el => el.addEventListener("click", () => {
    sendOperatorMessage(el.dataset.opChip);
  }));
  document.querySelectorAll("[data-op-confirm]").forEach(el => el.addEventListener("click", () => {
    confirmOperatorAction(Number(el.dataset.opConfirm));
  }));
  document.querySelectorAll("[data-op-cancel]").forEach(el => el.addEventListener("click", () => {
    const msg = opChatMessages[Number(el.dataset.opCancel)];
    if (msg) msg.confirmationResolved = "cancelled";
    refreshOpChat();
  }));
  document.querySelectorAll("[data-op-suggested]").forEach(el => el.addEventListener("click", () => {
    const [mi, ai] = el.dataset.opSuggested.split(":").map(Number);
    const action = opChatMessages[mi]?.suggestedActions?.[ai];
    if (!action) return;
    if (action.prompt) {
      sendOperatorMessage(action.prompt);
    } else if (action.action_type && action.payload) {
      opChatMessages.push({ role: "assistant", content: `Confirm: ${action.label}`, mode: "command", confirmation: { action_type: action.action_type, payload: action.payload } });
      refreshOpChat();
    }
  }));
}

document.addEventListener("keydown", event => {
  if (event.key === "/" && canAccessAdmin() && ["dashboard", "admin"].includes(activeView)) {
    const target = event.target;
    if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) return;
    event.preventDefault();
    if (!opChatOpen) { opChatOpen = true; refreshOpChat(); }
    document.getElementById("op-chat-input")?.focus();
  }
});

// ─── End Operator Chat ────────────────────────────────────────────────────────

setInterval(() => {
  if (activeView === "landing") {
    activeDemo = (activeDemo + 1) % flowSteps.length;
    document.querySelectorAll("[data-demo]").forEach((tile, index) => {
      tile.classList.toggle("active", index === activeDemo);
    });
    const demo = document.querySelector(".hero-product");
    if (demo) demo.innerHTML = productMockup();
  }
}, 4200);

window.addEventListener("popstate", () => {
  syncViewFromPath();
  render();
});

syncViewFromPath();
render();
