export const config = {
    "number": 44,
    "slug": "qa-gatekeeper",
    "title": "QA Gatekeeper",
    "category": "Student Agency Operations",
    "tagline": "A CPG-style pre-handoff QA checklist for student-built deliverables.",
    "persona": "Mentors, reviewers, and student leads.",
    "gap": "Quality assurance must be consistent across cities and tracks, not dependent on one expert.",
    "niche": "Professional oversight for student consulting organizations.",
    "metric": "deliverables passing QA before client handoff",
    "modules": [
        "Track-specific QA gates",
        "Reviewer assignment",
        "Blocker severity rubric",
        "Client acceptance checklist"
    ],
    "theme": {
        "accent": "#f97316",
        "accent2": "#fdba74",
        "emoji": "\ud83c\udf93",
        "metricLabel": "Operating readiness",
        "workflow": [
            "Set roles and artifacts",
            "Run rubric review",
            "Resolve blockers",
            "Export operating packet"
        ],
        "privacy": "Separate internal student notes from client-facing exports. Never store passwords."
    },
    "statuses": [
        "not-started",
        "blocked",
        "in-progress",
        "ready",
        "approved"
    ],
    "criteria": [
        {
            "id": "track-specific-qa-gates",
            "label": "Track-specific QA gates",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify track-specific qa gates with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "reviewer-assignment",
            "label": "Reviewer assignment",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify reviewer assignment with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "blocker-severity-rubric",
            "label": "Blocker severity rubric",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify blocker severity rubric with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "client-acceptance-checklist",
            "label": "Client acceptance checklist",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify client acceptance checklist with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "evidence-quality",
            "label": "Evidence quality",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
        },
        {
            "id": "owner-handoff",
            "label": "Owner handoff",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Make the output understandable and maintainable by a nontechnical owner."
        },
        {
            "id": "mission-alignment",
            "label": "Mission alignment",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Show how this advances digital equity, student growth, or pro bono delivery."
        },
        {
            "id": "qa-safety",
            "label": "QA and safety",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
        }
    ],
    "templates": {
        "actions": [
            "Run a real Volta scenario for QA Gatekeeper and capture baseline evidence.",
            "Complete the track-specific qa gates workflow with owner-safe notes.",
            "Resolve all blocked rubric items and add evidence for every ready item.",
            "Export the handoff packet and review it with a mentor before client use."
        ]
    },
    "sample": {
        "clientName": "Volta Cyprus Chapter",
        "chapter": "Cyprus",
        "studentLead": "Volta Student Lead",
        "notes": "Internal chapter operations project for student-led delivery excellence. QA Gatekeeper sample.",
        "evidencePrefix": "QA Gatekeeper",
        "evidence": [
            "Discovery call notes captured with owner confirmation.",
            "Public digital footprint reviewed and summarized.",
            "Mentor QA comments attached before handoff."
        ]
    }
};
//# sourceMappingURL=config.js.map