export const domain = {
    "kind": "qa-queue",
    "title": "QA Gatekeeper",
    "purpose": "A purpose-built qa queue interface for a cpg-style pre-handoff qa checklist for student-built deliverables.",
    "inputTitle": "Product-specific inputs",
    "previewTitle": "Generated working outputs",
    "tableTitle": "QA findings",
    "metricLabels": [
        "Pass/Fail Gate",
        "Severity Load",
        "Evidence Coverage"
    ],
    "fields": [
        {
            "id": "organization-client",
            "label": "Organization / client",
            "type": "text",
            "sample": "Volta Cyprus Chapter",
            "placeholder": "Enter organization / client"
        },
        {
            "id": "primary-goal",
            "label": "Primary goal",
            "type": "text",
            "sample": "deliverables passing QA before client handoff",
            "placeholder": "Enter primary goal"
        },
        {
            "id": "owner-reviewer",
            "label": "Owner / reviewer",
            "type": "text",
            "sample": "Volta project lead",
            "placeholder": "Enter owner / reviewer"
        },
        {
            "id": "evidence-source",
            "label": "Evidence source",
            "type": "text",
            "sample": "Owner interview + public audit",
            "placeholder": "Enter evidence source"
        },
        {
            "id": "input-asset",
            "label": "Input asset",
            "type": "text",
            "sample": "Deliverable links entered",
            "placeholder": "Enter input asset"
        },
        {
            "id": "output-format",
            "label": "Output format",
            "type": "text",
            "sample": "QA certificate",
            "placeholder": "Enter output format"
        },
        {
            "id": "review-threshold",
            "label": "Review threshold",
            "type": "number",
            "sample": 85,
            "placeholder": "Enter review threshold"
        },
        {
            "id": "approved-channel",
            "label": "Approved channel",
            "type": "text",
            "sample": "Owner handoff packet",
            "placeholder": "Enter approved channel"
        }
    ],
    "rows": [
        "Deliverable links entered",
        "Track template selected",
        "Reviewer assigned",
        "Defects logged",
        "Severity assigned",
        "Evidence attached",
        "Acceptance criteria checked",
        "QA certificate exported"
    ],
    "artifacts": [
        "QA certificate",
        "Defect log",
        "Client acceptance checklist"
    ],
    "checks": [
        "Critical defects block approval",
        "Evidence required for ready",
        "Mentor and owner approvals required"
    ],
    "sampleClient": "Volta Cyprus Chapter"
};
//# sourceMappingURL=domain.js.map