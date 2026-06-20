// Auto-generated from APRA prudential standards pages.
// Generated from APRA content fetched during the Hermes session.

export type HandbookPillarId = "governance" | "risk-management" | "recovery-resolution" | "reporting" | "financial-resilience" | "business-operations";

export type HandbookPillar = {
  id: HandbookPillarId;
  title: string;
  summary: string;
  note: string;
  standards: string[];
};

export type ClauseItem = {
  number: string;
  id: string;
  text: string;
};

export type ClauseSection = {
  title: string;
  items: ClauseItem[];
};

export type APRAClauseAtlasEntry = {
  id: string;
  code: string;
  title: string;
  pillar: HandbookPillarId;
  href: string;
  summary: string;
  sectionCount: number;
  itemCount: number;
  sections: ClauseSection[];
};

export const handbookPillars: HandbookPillar[] = [
  {
    "id": "governance",
    "title": "Governance",
    "summary": "Board oversight, fit and proper, and remuneration that supports prudent behaviour.",
    "note": "APRA expects honest, capable boards with clear accountability and challenge.",
    "standards": [
      "cps-510",
      "cps-520",
      "cps-511"
    ]
  },
  {
    "id": "risk-management",
    "title": "Risk management",
    "summary": "Risk framework, operational risk, and information security controls.",
    "note": "AI should sit inside the risk framework, not beside it.",
    "standards": [
      "cps-220",
      "cps-230",
      "cps-234"
    ]
  },
  {
    "id": "recovery-resolution",
    "title": "Recovery and resolution",
    "summary": "Critical functions, portability, and credible exit paths.",
    "note": "If a dependency fails, the entity must still serve customers.",
    "standards": [
      "cps-900"
    ]
  },
  {
    "id": "reporting",
    "title": "Reporting",
    "summary": "Evidence, reporting, and board visibility for the control environment.",
    "note": "Use the reporting spine to keep the evidence current.",
    "standards": []
  },
  {
    "id": "financial-resilience",
    "title": "Financial resilience",
    "summary": "Capital and liquidity strength relevant to banks and insurers.",
    "note": "AI can create prudential loss if it distorts credit, claims, or capital decisions.",
    "standards": []
  },
  {
    "id": "business-operations",
    "title": "Business operations",
    "summary": "Superannuation operations, service providers, and member outcomes.",
    "note": "For superannuation, the operating model is part of prudential control.",
    "standards": []
  }
];

export const apraClauseAtlas: APRAClauseAtlasEntry[] = [
  {
    "id": "cps-510",
    "code": "CPS 510",
    "title": "Governance",
    "pillar": "governance",
    "href": "https://www.apra.gov.au/standards/cps-510",
    "summary": "Board oversight, delegation, independence, and governance architecture.",
    "sections": [
      {
        "title": "Prudential Standard CPS 510 Governance",
        "items": [
          {
            "number": "(a)",
            "id": "Item-a",
            "text": "under subsections 11AF(3) of the Banking Act 1959 (the Banking Act), 32(4) of the Insurance Act 1973 (the Insurance Act), 230A(5) of the Life Insurance Act 1995 (the Life Insurance Act), and 92(5) of the Private Health Insurance (Prudential Supervision) Act 2015 (the PHIPS Act) REVOKE Banking, Insurance, Life Insurance, and Health Insurance (prudential standard) determination No. 1 of 2022 , including Prudential Standard CPS 510 Governance made under that determination;"
          },
          {
            "number": "(b)",
            "id": "Item-b",
            "text": "under subsection 11AF(1) of the Banking Act, DETERMINE the prudential standard , which applies to all ADIs and authorised banking NOHCs;"
          },
          {
            "number": "(c)",
            "id": "Item-c",
            "text": "under subsection 32(1) of the Insurance Act, DETERMINE the prudential standard, which applies to all general insurers and authorised insurance NOHCs, and subsidiaries of general insurers or authorised insurance NOHCs where those subsidiaries are parent entities of Level 2 insurance groups;"
          },
          {
            "number": "(d)",
            "id": "Item-d",
            "text": "under subsection 230A(1) of the Life Insurance Act, DETERMINE the prudential standard, which applies to all life companies, including friendly societies, and registered NOHCs; and"
          },
          {
            "number": "(e)",
            "id": "Item-e",
            "text": "under subsection 92(1) of the PHIPS Act, DETERMINE the prudential standard, which applies to all private health insurers."
          }
        ]
      },
      {
        "title": "Authority",
        "items": [
          {
            "number": "1.",
            "id": "Item-1",
            "text": "This Prudential Standard is made under:"
          }
        ]
      },
      {
        "title": "Application",
        "items": [
          {
            "number": "2.",
            "id": "Item-2",
            "text": "This Prudential Standard applies to all ‘APRA-regulated institutions’, [1] defined as:"
          },
          {
            "number": "3.",
            "id": "Item-3",
            "text": "All APRA - regulated institutions have to comply with this Prudential Standard in its entirety, unless otherwise expressly indicated. The obligations imposed by this Prudential Standard on, or in relation to, a foreign ADI , a Category C insurer or an EFLIC apply only in relation to the Australian branch operations of that institution."
          },
          {
            "number": "4.",
            "id": "Item-4",
            "text": "Where an APRA-regulated institution is the ‘Head of a group’, [2] it must comply with a requirement of this Prudential Standard:"
          },
          {
            "number": "",
            "id": "Item-4",
            "text": "In applying the requirements of this Prudential Standard on a group basis, references in paragraphs 52 to 78 and 80 to 90 to an ‘APRA-regulated institution’ should be read as ‘Head of a group’ and references to ‘institution’ should be read as ‘group’."
          },
          {
            "number": "5.",
            "id": "Item-5",
            "text": "This Prudential Standard commences on 1 January 2024."
          }
        ]
      },
      {
        "title": "Interpretation",
        "items": [
          {
            "number": "6.",
            "id": "Item-6",
            "text": "Terms that are defined in Prudential Standard 3PS 001 Definitions ( 3PS 001 ), Prudential Standard APS 001 Definitions ( APS 001 ), Prudential Standard GPS 001 Definitions ( GPS 001 ), Prudential Standard LPS 001 Definitions ( LPS 001 ) or Prudential Standard HPS 001 Definitions ( HPS 001 ) appear in bold the first time they are used in this Prudential Standard."
          },
          {
            "number": "7.",
            "id": "Item-7",
            "text": "Where this Prudential Standard provides for APRA to exercise a power or discretion, this power or discretion is to be exercised in writing."
          },
          {
            "number": "8.",
            "id": "Item-8",
            "text": "For the purposes of this Prudential Standard:"
          },
          {
            "number": "9.",
            "id": "Item-9",
            "text": "For the purposes of this Prudential Standard, a reference to an ‘auditor’ is taken to be a reference to a person holding any of the following positions, unless otherwise specified:"
          },
          {
            "number": "10.",
            "id": "Item-10",
            "text": "This Prudential Standard sets out the minimum requirements that an APRA-regulated institution and the Head of a group must meet in the interests of promoting strong and effective governance."
          },
          {
            "number": "11.",
            "id": "Item-11",
            "text": "The Head of a group must maintain governance arrangements for the group."
          },
          {
            "number": "12.",
            "id": "Item-12",
            "text": "In meeting the requirements of this Prudential Standard on a group basis, the Head of a group must maintain a group internal audit function that meets the requirements of paragraphs 68 and 69 on a group basis."
          },
          {
            "number": "13.",
            "id": "Item-13",
            "text": "The Board of the Head of a group is ultimately responsible for oversight of the sound and prudent management of the group and must have the following committees for the group:"
          },
          {
            "number": "14.",
            "id": "Item-14",
            "text": "The Board of a Head of a group must ensure that directors and senior management of the group, collectively, have the full range of skills needed for the effective oversight and prudent management, respectively, of the group. This does not lessen the responsibility of each of the individual Boards of the institutions within the group for their institutions."
          },
          {
            "number": "15.",
            "id": "Item-15",
            "text": "Where an entity within the group that is not an APRA-regulated institution engages in business activities that may pose a material risk to the group, the Head of the group must ensure that such business activities are undertaken in a way that complies with the group governance arrangements. [3]"
          }
        ]
      },
      {
        "title": "The Board and senior management",
        "items": [
          {
            "number": "16.",
            "id": "Item-16",
            "text": "The Board of directors (the Board) of a locally-incorporated APRA - regulated institution is ultimately responsible for oversight of the sound and prudent management of that institution."
          },
          {
            "number": "17.",
            "id": "Item-17",
            "text": "The Board must have a formal charter that sets out the roles and responsibilities of the Board."
          },
          {
            "number": "18.",
            "id": "Item-18",
            "text": "The Board, in fulfilling its functions, may delegate authority to management to act on behalf of the Board with respect to certain matters, as decided by the Board. This delegation of authority must be clearly set out and documented. The Board must have mechanisms in place for monitoring the exercise of delegated authority. The Board cannot abrogate its responsibility for oversight of the functions delegated to management."
          },
          {
            "number": "19.",
            "id": "Item-19",
            "text": "The Board must ensure that directors and senior management of the institution collectively have the full range of skills needed for the effective and prudent operation of the institution, and that each director has skills that allow them to make an effective contribution to Board deliberations and processes. This includes the requirement for directors, collectively, to have the necessary skills, knowledge and experience to understand the risks of the institution, including its legal and prudential obligations, and to ensure that the institution is managed in an appropriate way taking into account these risks. This does not preclude the Board from supplementing its skills and knowledge by engaging external consultants and experts."
          },
          {
            "number": "20.",
            "id": "Item-20",
            "text": "Senior management of a locally incorporated APRA - regulated institution, with responsibilities relating to the business in Australia, must be ordinarily resident in Australia."
          },
          {
            "number": "21.",
            "id": "Item-21",
            "text": "Directors and senior management of a locally incorporated APRA - regulated institution must be available to meet with APRA on request."
          },
          {
            "number": "22.",
            "id": "Item-22",
            "text": "The Board must provide the auditor and the Appointed Actuary of the institution, as relevant, with the opportunity to raise matters directly with the Board."
          }
        ]
      },
      {
        "title": "Independence",
        "items": [
          {
            "number": "23.",
            "id": "Item-23",
            "text": "For the purposes of this Prudential Standard, an ‘independent director’ is a non-executive director who is free from any business or other association — including those arising out of a substantial shareholding, involvement in past management or as a supplier, customer or adviser — that could materially interfere with the exercise of their independent judgement. The circumstances that will not meet this test of independence include, but are not limited to, those set out in Attachment A."
          },
          {
            "number": "24.",
            "id": "Item-24",
            "text": "If the Board of a locally incorporated APRA - regulated institution is in doubt about a director’s independence for the purposes of this Prudential Standard, the APRA - regulated institution may refer the matter to APRA for guidance."
          }
        ]
      },
      {
        "title": "Definition of non-executive director",
        "items": [
          {
            "number": "25.",
            "id": "Item-25",
            "text": "For the purposes of this Prudential Standard, a reference to a ‘non-executive director’ is interpreted as meaning a reference to a director who is not a member of the APRA - regulated institution’s management. Non-executive directors may include Board members or senior managers of the parent company of the locally incorporated APRA - regulated institution or of the parent company’s subsidiaries, but not executives of the APRA - regulated institution or its subsidiaries."
          }
        ]
      },
      {
        "title": "Board composition",
        "items": [
          {
            "number": "26.",
            "id": "Item-26",
            "text": "The Board of a locally incorporated APRA - regulated institution must have a minimum of five directors at all times."
          },
          {
            "number": "27.",
            "id": "Item-27",
            "text": "The Board must have a majority of independent directors at all times. For a locally incorporated APRA - regulated institution that is a subsidiary [4] of another APRA-regulated institution or overseas equivalent, [5] exceptions may apply as set out at paragraphs 37 to 39. For a locally incorporated APRA - regulated institution that is a subsidiary of a parent company that is not prudentially regulated, exceptions may apply as set out at paragraph 40."
          },
          {
            "number": "28.",
            "id": "Item-28",
            "text": "The chairperson of the Board must be an independent director of the APRA - regulated institution."
          },
          {
            "number": "29.",
            "id": "Item-29",
            "text": "A majority of directors present and eligible to vote at all Board meetings must be non-executive directors."
          },
          {
            "number": "30.",
            "id": "Item-30",
            "text": "The chairperson of the Board cannot have been the Chief Executive Officer (CEO) of the APRA - regulated institution at any time during the previous three years. If the position of the CEO is unexpectedly vacated, the chairperson may serve as an interim CEO. After a period of 90 days, approval must be sought from APRA to allow this arrangement to continue."
          },
          {
            "number": "31.",
            "id": "Item-31",
            "text": "The chairperson must be available to meet with APRA on request."
          },
          {
            "number": "32.",
            "id": "Item-32",
            "text": "For a locally owned and incorporated APRA - regulated institution, a majority of directors must be ordinarily resident in Australia."
          },
          {
            "number": "33.",
            "id": "Item-33",
            "text": "For a foreign-owned, locally incorporated APRA - regulated institution, at least two of the directors must be ordinarily resident in Australia, at least one of whom must also be independent."
          }
        ]
      },
      {
        "title": "Board representation",
        "items": [
          {
            "number": "34.",
            "id": "Item-34",
            "text": "Board representation must be consistent with a locally incorporated APRA - regulated institution’s shareholding. Where a shareholding constitutes not more than 15 per cent of the APRA - regulated institution’s voting shares, there should not be more than one Board member who is an associate of the shareholder where the Board has up to six directors, and not more than two Board members who are associates of the shareholder where the Board has seven or more directors. A director is taken to be an associate of a shareholder for the purposes of this Prudential Standard if the director is an associate of the shareholder, or the shareholder is an associate of the director, according to the definition of associate in clause 4 of Schedule 1 of the Financial Sector (Shareholdings) Act 1998 (Financial Sector (Shareholdings) Act). That definition is to be applied for the purposes of this Prudential Standard as if subparagraph (1)( l ) of that definition were omitted."
          },
          {
            "number": "35.",
            "id": "Item-35",
            "text": "Where an individual shareholding is greater than 15 per cent, as approved under the Financial Sector (Shareholdings) Act, the Board representation of that shareholding may be greater than allowed in paragraph 34, although it must still be broadly proportionate to the shareholding concerned. [6]"
          },
          {
            "number": "36.",
            "id": "Item-36",
            "text": "For a locally incorporated ADI that operates as a special service provider, the ADI may apply to APRA for approval for alternative Board composition arrangements that meet the objectives of this Prudential Standard. APRA may approve alternative arrangements for the ADI if satisfied that those arrangements will, in APRA’s opinion, achieve the objectives of this Prudential Standard."
          }
        ]
      },
      {
        "title": "Locally incorporated APRA-regulated institutions that are subsidiaries of other APRA-regulated institutions or overseas equivalents",
        "items": [
          {
            "number": "37.",
            "id": "Item-37",
            "text": "For a locally incorporated APRA - regulated institution that is a subsidiary of another APRA-regulated institution or an overseas equivalent, the Board must have a majority of non-executive directors, but these non-executive directors need not all be independent."
          },
          {
            "number": "38.",
            "id": "Item-38",
            "text": "An institution to which paragraph 37 applies will be required to have, at a minimum, two independent directors, in addition to an independent chairperson, where the Board has up to seven members. Where the Board has more than seven members, the institution will be required to have at least three independent directors, in addition to an independent chairperson."
          },
          {
            "number": "39.",
            "id": "Item-39",
            "text": "For the purposes of meeting the requirements in paragraph 38, the independent directors on the Board of the parent company or its other subsidiaries may also sit as independent directors on the Board of the institution."
          }
        ]
      },
      {
        "title": "Subsidiaries of a parent that is not prudentially regulated",
        "items": [
          {
            "number": "40.",
            "id": "Item-40",
            "text": "For a locally incorporated APRA - regulated institution that is a subsidiary of another entity not covered by the arrangements in paragraphs 37 to 39 of this Prudential Standard , the Board must have a majority of independent directors. However, independent directors on the Board of the parent company or its other subsidiaries may also sit as independent directors on the Board of the institution."
          }
        ]
      },
      {
        "title": "Joint ventures",
        "items": [
          {
            "number": "41.",
            "id": "Item-41",
            "text": "For the purposes of this Prudential Standard, a locally incorporated APRA - regulated institution that operates as a joint venture can be considered as part of the group of each parent entity . Independent directors of a parent may sit as independent directors on the Board of the joint venture entity. However, the general concessions available to subsidiaries in paragraphs 37 to 39 are not available to joint ventures."
          }
        ]
      },
      {
        "title": "APRA-regulated institutions that are part of a group or any other corporate group",
        "items": [
          {
            "number": "42.",
            "id": "Item-42",
            "text": "Where a locally incorporated APRA - regulated institution is part of a group or any other corporate group , and the APRA - regulated institution utilises group policies or functions, the Board of the APRA - regulated institution must approve the use of group policies and functions and must ensure that these policies and functions give appropriate regard to the APRA - regulated institution’s business and its specific requirements."
          }
        ]
      },
      {
        "title": "Entities that are part of a group that are not APRA-regulated institutions",
        "items": [
          {
            "number": "43.",
            "id": "Item-43",
            "text": "The board composition and representation requirements in paragraphs 26 to 36 that apply to a locally incorporated APRA-regulated institution do not apply to an entity within the group that is not an APRA-regulated institution. [7]"
          }
        ]
      },
      {
        "title": "Board performance assessment",
        "items": [
          {
            "number": "44.",
            "id": "Item-44",
            "text": "The Board of a locally incorporated APRA - regulated institution must have procedures for assessing, at least annually, the Board’s performance relative to its objectives. It must also have in place a procedure for assessing, at least annually, the performance of individual directors."
          }
        ]
      },
      {
        "title": "Board renewal",
        "items": [
          {
            "number": "45.",
            "id": "Item-45",
            "text": "The Board of a locally incorporated APRA - regulated institution must have in place a formal policy on Board renewal. This policy must provide details of how the Board intends to renew itself in order to ensure it remains open to new ideas and independent thinking, while retaining adequate expertise. The policy must give consideration to whether directors have served on the Board for a period that could, or could reasonably be perceived to, materially interfere with their ability to act in the best interests of the institution. The policy must include the process for appointing and removing directors, including the factors that will determine when an existing director will be re-appointed."
          },
          {
            "number": "46.",
            "id": "Item-46",
            "text": "As in the case of locally incorporated APRA - regulated institutions, the ultimate responsibility for the safety and soundness of a foreign ADI or a Category C insurer resides with its Board. Foreign ADIs and Category C insurers must nominate a senior officer (whether a director or senior executive) outside Australia with delegated authority from the Board ( senior officer outside Australia ) who will be responsible for overseeing the Australian branch operation."
          },
          {
            "number": "47.",
            "id": "Item-47",
            "text": "For a foreign ADI or Category C insurer, there must also be a senior manager [8] in Australia responsible for the local operation who is ordinarily resident in Australia. The senior management must be available to meet with APRA on request."
          },
          {
            "number": "48.",
            "id": "Item-48",
            "text": "A Category C insurer that appoints a corporate agent as its agent in Australia must additionally ensure that:"
          },
          {
            "number": "49.",
            "id": "Item-49",
            "text": "The ultimate responsibility for the safety and soundness of an EFLIC resides with its Board. An EFLIC must establish a Compliance Committee [10] to assist the Board in meeting its responsibilities under the Life Insurance Act. The requirements for the composition of the Compliance Committee are detailed in Attachment B. The senior management of an EFLIC must be available to meet with APRA on request."
          },
          {
            "number": "50.",
            "id": "Item-50",
            "text": "The senior officer outside Australia or Compliance Committee of an EFLIC, as relevant, must provide the external auditor of the APRA - regulated institution with the opportunity to raise matters directly with the senior officer outside Australia or the Compliance Committee, as relevant."
          }
        ]
      },
      {
        "title": "Board Audit Committee",
        "items": [
          {
            "number": "51.",
            "id": "Item-51",
            "text": "An APRA-regulated institution (excluding foreign ADIs and Category C insurers but including EFLICs) must have a Board Audit Committee, which assists the Board by providing an objective non-executive review of the effectiveness of the institution’s financial reporting and risk management framework."
          },
          {
            "number": "52.",
            "id": "Item-52",
            "text": "The Board Audit Committee must have sufficient powers to enable it to obtain all information necessary for the performance of its functions."
          },
          {
            "number": "53.",
            "id": "Item-53",
            "text": "The Board Audit Committee must have at least three members. All members of the Committee must be non-executive directors of the APRA - regulated institution. A majority of the members of the Committee must be independent."
          },
          {
            "number": "54.",
            "id": "Item-54",
            "text": "The chairperson of the Board Audit Committee must be an independent director of the APRA - regulated institution."
          },
          {
            "number": "55.",
            "id": "Item-55",
            "text": "The chairperson of the Board may be a member of the Board Audit Committee, but may not chair the Committee."
          },
          {
            "number": "56.",
            "id": "Item-56",
            "text": "The Board Audit Committee must have a written charter that outlines its roles, responsibilities and terms of operation. The responsibilities of the Committee must include oversight of:"
          },
          {
            "number": "57.",
            "id": "Item-57",
            "text": "The Board Audit Committee is required to provide prior endorsement for the appointment or removal of the institution’s auditor and Head of Internal Audit. If the auditor or Head of Internal Audit is removed from their position, the reasons for removal must be discussed with APRA as soon as practicable, and no more than 10 business days , after the Committee’s endorsement is agreed upon."
          },
          {
            "number": "58.",
            "id": "Item-58",
            "text": "The Board Audit Committee must review the engagement of the auditor at least annually, including making an assessment of whether the auditor meets the Audit Independence tests set out in APES 110 Code of Ethics for Professional Accountants , [11] as well as the additional auditor independence requirements set out in this Prudential Standard."
          },
          {
            "number": "59.",
            "id": "Item-59",
            "text": "For a foreign ADI or a Category C insurer, the assessment referred to in paragraph 58 is the responsibility of the senior officer outside Australia, and for an EFLIC, it is the responsibility of the Compliance Committee."
          },
          {
            "number": "60.",
            "id": "Item-60",
            "text": "The Board Audit Committee must regularly review the internal and external audit plans, ensuring that they cover all material risks and financial reporting requirements of the institution. It must also regularly review the findings of audits, and ensure that issues are being managed and rectified in an appropriate and timely manner."
          },
          {
            "number": "61.",
            "id": "Item-61",
            "text": "The Board Audit Committee must ensure the adequacy and independence of both the internal and external audit functions."
          },
          {
            "number": "62.",
            "id": "Item-62",
            "text": "The members of the Board Audit Committee must, at all times, have free and unfettered access to senior management, the internal auditor, the heads of all risk management functions, the auditor and the Appointed Actuary, as applicable, and vice versa."
          },
          {
            "number": "63.",
            "id": "Item-63",
            "text": "The Board Audit Committee must ensure that the APRA-regulated institution maintains policies and procedures for employees of the institution to submit, confidentially, information about accounting, internal control, compliance, audit, and other matters about which the employee has concerns. The Committee must also ensure that the APRA-regulated institution has a process for ensuring employees are aware of these policies and for dealing with matters raised by employees under these policies."
          },
          {
            "number": "64.",
            "id": "Item-64",
            "text": "Members of the Board Audit Committee must be available to meet with APRA on request."
          },
          {
            "number": "65.",
            "id": "Item-65",
            "text": "The Board Audit Committee must invite the auditor and the Appointed Actuary, as applicable, to meetings of the Committee."
          },
          {
            "number": "66.",
            "id": "Item-66",
            "text": "The internal auditor must have a reporting line and unfettered access to the Board Audit Committee."
          },
          {
            "number": "67.",
            "id": "Item-67",
            "text": "For a foreign ADI, a Category C insurer and an EFLIC, the auditor of the local operation must have direct access to the Head Office audit function."
          }
        ]
      },
      {
        "title": "Internal audit",
        "items": [
          {
            "number": "68.",
            "id": "Item-68",
            "text": "An APRA-regulated institution must have an independent and adequately resourced internal audit function for the institution. If an APRA-regulated institution does not believe it is necessary to have a dedicated internal audit function, it must apply to APRA to seek an exemption from this requirement, setting out reasons why it believes it should be exempt. APRA may approve alternative arrangements for an institution where APRA is satisfied that they will achieve the same objectives."
          },
          {
            "number": "69.",
            "id": "Item-69",
            "text": "The objectives of the internal audit function must include evaluation of the adequacy and effectiveness of the financial and risk management framework of the institution. [12] To fulfil its functions, the internal auditor must, at all times, have unfettered access to the institution’s business lines and support functions."
          }
        ]
      },
      {
        "title": "Auditor  independence [13]",
        "items": [
          {
            "number": "70.",
            "id": "Item-70",
            "text": "The Corporations Act 2001 (Corporations Act) contains a number of requirements in relation to auditor independence. The auditor independence requirements in this Prudential Standard are substantially consistent with those requirements, and are intended to help ensure the independence of an auditor engaged to perform work of a prudential nature in relation to the Banking Act, Insurance Act, Life Insurance Act (collectively, the ‘Prudential Acts’), prudential standards and reporting standards. [14]"
          },
          {
            "number": "71.",
            "id": "Item-71",
            "text": "The Board of the APRA-regulated institution, senior officer outside Australia or the Compliance Committee, as relevant, must, to the extent practical, undertake steps to satisfy itself that the auditor, who undertakes work for the APRA-regulated institution in relation to the Prudential Acts, prudential standards or reporting standards, is independent of the institution, [15] and that there is no conflict of interest situation that could compromise, or be seen to compromise, the independence of the auditor."
          },
          {
            "number": "72.",
            "id": "Item-72",
            "text": "As part of the process of ascertaining the independence of the auditor, an APRA-regulated institution must obtain a declaration from the auditor to the effect that:"
          },
          {
            "number": "73.",
            "id": "Item-73",
            "text": "For the purposes of this Prudential Standard, a conflict of interest situation exists in relation to an APRA-regulated institution at a particular time, if because of circumstances that exist at that time:"
          },
          {
            "number": "74.",
            "id": "Item-74",
            "text": "A person who was a member of an audit firm or a director of an audit company and who served in a professional capacity in the audit of an APRA-regulated institution in relation to the Prudential Acts, prudential standards or reporting standards, cannot be appointed to the role of director or senior manager of that APRA-regulated institution until at least two years have passed since they served in that professional capacity."
          },
          {
            "number": "75.",
            "id": "Item-75",
            "text": "A person who was an employee of an audit company, other than a director of that company, and who acted as the lead auditor [17] or review auditor [18] in the audit of an APRA-regulated institution in relation to the Prudential Acts, prudential standards or reporting standards, cannot be appointed to the role of director or senior manager of that APRA-regulated institution until at least two years have passed since they acted as the lead auditor or review auditor."
          },
          {
            "number": "76.",
            "id": "Item-76",
            "text": "A person cannot be appointed as a director or senior manager of an APRA-regulated institution if:"
          },
          {
            "number": "77.",
            "id": "Item-77",
            "text": "An individual who plays a significant role [19] in the audit of an APRA-regulated institution in relation to the Prudential Acts, prudential standards or reporting standards, for five successive years, or for more than five years out of seven successive years, cannot continue to play a significant role in the audit until at least a further two years have passed, except with an exemption from APRA. APRA may grant an exemption from this requirement if the individual provides specialist services that are otherwise not readily available or there are no other registered company auditors available to provide satisfactory services for the APRA-regulated institution."
          },
          {
            "number": "78.",
            "id": "Item-78",
            "text": "For a general insurer (including a Category C insurer), a life company (including an EFLIC), or a private health insurer , for the purposes of maintaining their independence and objectivity, the Appointed Auditor and Appointed Actuary cannot both be employed by the same body corporate or related bodies corporate, or by the same firm or related firms . [20]"
          },
          {
            "number": "79.",
            "id": "Item-79",
            "text": "The Board of an APRA-regulated institution (excluding foreign ADIs and Category C insurers but including EFLICs) must have a Board Risk Committee, which assists the Board by providing an objective non-executive oversight of the implementation and operation of the institution’s risk management framework."
          },
          {
            "number": "80.",
            "id": "Item-80",
            "text": "The Board Risk Committee must be provided with the powers necessary to enable it to perform its functions."
          },
          {
            "number": "81.",
            "id": "Item-81",
            "text": "The chairperson of the Board Risk Committee must be an independent director of the APRA - regulated institution."
          },
          {
            "number": "82.",
            "id": "Item-82",
            "text": "The chairperson of the Board may be a member of the Board Risk Committee, but may not chair the Committee. The chair of the Board Audit Committee may also chair the Board Risk Committee."
          },
          {
            "number": "83.",
            "id": "Item-83",
            "text": "The Board Risk Committee must have at least three members. All members of the Committee must be non-executive directors of the APRA-regulated institution. A majority of the members of the Committee must be independent."
          },
          {
            "number": "84.",
            "id": "Item-84",
            "text": "The Board Risk Committee must have a written charter that outlines its roles, responsibilities and terms of operation. The responsibilities of the Committee must include:"
          },
          {
            "number": "85.",
            "id": "Item-85",
            "text": "The Board Risk Committee is required to provide prior endorsement for the appointment or removal of the institution’s CRO. If the CRO is removed from their position, the reasons for removal must be discussed with APRA as soon as practicable, and no more than 10 business days, after the Committee’s endorsement is agreed upon."
          },
          {
            "number": "86.",
            "id": "Item-86",
            "text": "The Board Risk Committee must have free and unfettered access to senior management, risk and financial control personnel, and other parties (internal and external) in carrying out its duties."
          },
          {
            "number": "87.",
            "id": "Item-87",
            "text": "The Board Risk Committee must invite the CRO to attend all relevant sections of meetings of the Committee."
          }
        ]
      },
      {
        "title": "Persons not to be constrained from providing information to APRA [22]",
        "items": [
          {
            "number": "88.",
            "id": "Item-88",
            "text": "No prospective, current, or former officer, employee or contractor (including professional service provider) of an APRA-regulated institution may be constrained or impeded, whether by confidentiality clauses or other means, from disclosing information to APRA, from discussing issues with APRA of relevance to the management and prudential supervision of the institution, or from providing documents under their control to APRA, that may be relevant in the context of the management or prudential supervision of the institution. Such persons are not to be constrained or impeded from providing information to, as applicable, auditors, the Appointed Actuary and others, who have statutory responsibilities in relation to the institution."
          },
          {
            "number": "89.",
            "id": "Item-89",
            "text": "An APRA-regulated institution must ensure that the institution’s internal policy and contractual arrangements do not explicitly or implicitly restrict or discourage auditors or other parties from communicating with APRA."
          },
          {
            "number": "90.",
            "id": "Item-90",
            "text": "APRA may adjust or exclude a specific requirement in this Prudential Standard in relation to an APRA-regulated institution. [23]"
          },
          {
            "number": "91.",
            "id": "Item-91",
            "text": "A private health insurer must contact APRA if it seeks to place reliance, for the purposes of complying with this Prudential Standard, on a previous exemption or other exercise of discretion by APRA, or an exemption or other exercise of discretion deemed or given effect to by APRA, under a previous Governance Standard ."
          },
          {
            "number": "92.",
            "id": "Item-92",
            "text": "For all APRA-regulated institutions other than private health insurers, an exercise of APRA’s discretion under a previous version of a governance prudential standard continues to have effect under this Prudential Standard. For the purposes of this paragraph, ‘a previous version of this Prudential Standard’ includes any versions of:"
          },
          {
            "number": "1.",
            "id": "Attachment-A-Item-1",
            "text": "is a substantial shareholder [25] of the APRA - regulated institution or an officer of, or otherwise associated directly with, a substantial shareholder of the institution;"
          },
          {
            "number": "2.",
            "id": "Attachment-A-Item-2",
            "text": "is employed, or has previously been employed in an executive capacity by the APRA-regulated institution or another member of the group, and there has not been a period of at least three years between ceasing such employment and serving on the Board;"
          },
          {
            "number": "3.",
            "id": "Attachment-A-Item-3",
            "text": "has within the last three years been a principal of a material professional adviser or a material consultant to the APRA-regulated institution or another member of the group, or an employee materially associated with the service provided;"
          },
          {
            "number": "4.",
            "id": "Attachment-A-Item-4",
            "text": "is a material supplier or customer of the APRA-regulated institution or another member of the group, or an officer of or otherwise associated directly or indirectly with a material supplier or customer; or"
          },
          {
            "number": "5.",
            "id": "Attachment-A-Item-5",
            "text": "has a material contractual relationship with the APRA-regulated institution or another member of the group other than as a director."
          }
        ]
      },
      {
        "title": "Purpose of the Compliance Committee",
        "items": [
          {
            "number": "1.",
            "id": "Attachment-B-Item-1",
            "text": "The purpose of the Compliance Committee (referred to in this Attachment as ‘the Committee’) is to:"
          },
          {
            "number": "2.",
            "id": "Attachment-B-Item-2",
            "text": "As required by subsections 16ZF(1) and (4) of the Life Insurance Act, the Board must delegate sufficient powers of management to the members of the Committee to enable Committee members to ensure that the EFLIC complies with the requirements in, or imposed under, the Life Insurance Act. The Board must do so irrespective of anything to the contrary in the EFLIC’s constitution."
          }
        ]
      },
      {
        "title": "Continuing responsibility of the Board",
        "items": [
          {
            "number": "3.",
            "id": "Attachment-B-Item-3",
            "text": "Establishment of the Committee does not free the Board from ultimate responsibility for ensuring the Australian branch of the EFLIC complies with the requirements in, or imposed under, the Life Insurance Act."
          },
          {
            "number": "4.",
            "id": "Attachment-B-Item-4",
            "text": "In recognition of this, the Board must:"
          }
        ]
      },
      {
        "title": "Composition and residency status of Committee members",
        "items": [
          {
            "number": "5.",
            "id": "Attachment-B-Item-5",
            "text": "The Committee must comprise at least five members appointed by the Board. Those members must include:"
          },
          {
            "number": "6.",
            "id": "Attachment-B-Item-6",
            "text": "A member cannot satisfy more than one of the composition requirements contained in subparagraphs 5(a), 5(b) and 5(c) of this Attachment (i.e. the director, PEO and independent members must all be separate individuals)."
          },
          {
            "number": "7.",
            "id": "Attachment-B-Item-7",
            "text": "At least two of the Committee members must be ordinarily resident in Australia, one being the PEO and the other an independent member."
          },
          {
            "number": "8.",
            "id": "Attachment-B-Item-8",
            "text": "It should be noted that the definition of director contained in the Life Insurance Act, in relation to an EFLIC, is taken to refer to both members of the Committee and the directors of the EFLIC (except for certain provisions, notably sections 230B and 245 of the Life Insurance Act, where only Committee members are being referred to)."
          }
        ]
      },
      {
        "title": "Application for a modified Committee composition",
        "items": [
          {
            "number": "9.",
            "id": "Attachment-B-Item-9",
            "text": "APRA may, on application from an EFLIC, determine a modified Committee for the EFLIC where it can be demonstrated that it is appropriate to do so."
          },
          {
            "number": "10.",
            "id": "Attachment-B-Item-10",
            "text": "In making this determination, APRA will take into account the following factors:"
          },
          {
            "number": "11.",
            "id": "Attachment-B-Item-11",
            "text": "The composition of any modified Committee would be determined on a case-by-case basis by APRA, but the possible modifications could take one or more of the following forms:"
          }
        ]
      },
      {
        "title": "Appointment and removal of Committee members",
        "items": [
          {
            "number": "12.",
            "id": "Attachment-B-Item-12",
            "text": "The power to appoint and remove members of the Committee resides with the Board."
          },
          {
            "number": "13.",
            "id": "Attachment-B-Item-13",
            "text": "The Board must have appointed all members and formally constituted the Committee within seven days of receiving notification of registration."
          },
          {
            "number": "14.",
            "id": "Attachment-B-Item-14",
            "text": "Each member of the Committee must be fit and proper for the role in accordance with the requirements for fitness and propriety as set out in CPS 520 ."
          },
          {
            "number": "15.",
            "id": "Attachment-B-Item-15",
            "text": "The Board must ensure that the Committee as a whole possesses the necessary skills and expertise to ensure that the EFLIC complies with the requirements in, or imposed under, the Life Insurance Act, and to discharge the duties and responsibilities of the Committee provided for in this Prudential Standard."
          },
          {
            "number": "16.",
            "id": "Attachment-B-Item-16",
            "text": "The Committee must have a policy for dealing with conflicts of interest."
          },
          {
            "number": "17.",
            "id": "Attachment-B-Item-17",
            "text": "Notwithstanding the Board’s power to appoint and remove members, APRA may, under section 230B of the Life Insurance Act, direct an EFLIC to remove a member of the Committee."
          },
          {
            "number": "18.",
            "id": "Attachment-B-Item-18",
            "text": "While membership of the Committee is the responsibility of the Board, the powers to appoint and remove members of the Committee must not be used in a manner that impedes, discourages or otherwise hinders the Committee from discharging its duties and responsibilities. Examples that would be cause for concern by APRA would be an excessive turnover of members, or the removal of members at inappropriate times (for example at critical reporting periods). If requested to do so by APRA, an EFLIC must, within a time stipulated by APRA (which must not be unreasonable), provide a written report to APRA responding to any queries APRA has regarding the removal of members."
          }
        ]
      },
      {
        "title": "Processes of the Committee",
        "items": [
          {
            "number": "19.",
            "id": "Attachment-B-Item-19",
            "text": "At least three members of the Committee are required to be present at a meeting of the Committee to form a quorum. The PEO, and at least one independent member who is ordinarily resident in Australia, must be amongst the three members present."
          },
          {
            "number": "20.",
            "id": "Attachment-B-Item-20",
            "text": "The chairperson of the Committee must be a non-executive member."
          },
          {
            "number": "21.",
            "id": "Attachment-B-Item-21",
            "text": "Resolutions can be passed only by a majority with the chairperson having a casting vote."
          },
          {
            "number": "22.",
            "id": "Attachment-B-Item-22",
            "text": "The Committee must meet as often as required to discharge its duties and responsibilities, although APRA would expect the Committee to meet on at least a quarterly basis. Members, and individuals who may be needed to address the Committee, must be given reasonable notice of pending meetings."
          },
          {
            "number": "23.",
            "id": "Attachment-B-Item-23",
            "text": "The Committee must ensure that the Appointed Actuary is given reasonable notice of any meeting of the Committee at which matters are to be considered that relate to the functions and duties of the actuary, including matters:"
          },
          {
            "number": "24.",
            "id": "Attachment-B-Item-24",
            "text": "Written minutes of Committee meetings must be taken and copies kept and made available to APRA on request. Any papers or submissions put to the Committee must likewise be kept and made available to APRA on request."
          }
        ]
      },
      {
        "title": "Duties and responsibilities of the Committee",
        "items": [
          {
            "number": "25.",
            "id": "Attachment-B-Item-25",
            "text": "The Committee must, with the powers delegated to it by the Board, ensure that the EFLIC complies with:"
          },
          {
            "number": "26.",
            "id": "Attachment-B-Item-26",
            "text": "The Committee members must report to APRA, within 14 business days of becoming aware:"
          },
          {
            "number": "27.",
            "id": "Attachment-B-Item-27",
            "text": "The report must:"
          },
          {
            "number": "28.",
            "id": "Attachment-B-Item-28",
            "text": "APRA would expect the Committee to provide a copy of the report to the Board."
          }
        ]
      }
    ],
    "itemCount": 131,
    "sectionCount": 27
  },
  {
    "id": "cps-520",
    "code": "CPS 520",
    "title": "Fit and Proper",
    "pillar": "governance",
    "href": "https://www.apra.gov.au/standards/cps-520",
    "summary": "Assessment and reassessment of responsible persons, auditors, and actuaries.",
    "sections": [
      {
        "title": "Prudential Standard CPS 520 Fit and Proper",
        "items": [
          {
            "number": "(a)",
            "id": "Item-a",
            "text": "under subsection 11AF(3) of the Banking Act 1959 REVOKE Banking, Insurance and Life Insurance (prudential standard) determination No. 9 of 2016, including Prudential Standard CPS 520 Fit and Proper made under that Determination, to the extent that it applied to all ADIs and authorised banking NOHCs;"
          },
          {
            "number": "(b)",
            "id": "Item-b",
            "text": "under subsection 32(4) of the Insurance Act 1973 REVOKE Banking, Insurance and Life Insurance (prudential standard) determination No. 9 of 2016, including Prudential Standard CPS 520 Fit and Proper made under that Determination, to the extent that it applied to all general insurers, authorised insurance NOHCs, and subsidiaries of general insurers and authorised insurance NOHCs;"
          },
          {
            "number": "(c)",
            "id": "Item-c",
            "text": "under subsection 230A(5) of the Life Insurance Act 1995 REVOKE Banking, Insurance and Life Insurance (prudential standard) determination No. 9 of 2016, including Prudential Standard CPS 520 Fit and Proper made under that Determination, to the extent that it applied to life companies, friendly societies, registered life NOHCs, and subsidiaries of life companies and registered life NOHCs;"
          },
          {
            "number": "(d)",
            "id": "Item-d",
            "text": "under subsection 11AF(1) of the Banking Act 1959 DETERMINE Prudential Standard CPS 520 Fit and Proper in the form set out in the Schedule, to the extent that it applies to all ADIs and authorised banking NOHCs;"
          },
          {
            "number": "(e)",
            "id": "Item-e",
            "text": "under subsection 32(1) of the Insurance Act 1973 DETERMINE Prudential Standard CPS 520 Fit and Proper in the form set out in the Schedule, to the extent that it applies to all general insurers, authorised insurance NOHCs, and subsidiaries of general insurers and authorised insurance NOHCs;"
          },
          {
            "number": "(f)",
            "id": "Item-f",
            "text": "under subsection 230A(1) of the Life Insurance Act 1995 DETERMINE Prudential Standard CPS 520 Fit and Proper in the form set out in the Schedule, to the extent that it applies to all life companies, friendly societies, registered life NOHCs, and subsidiaries of life companies and registered life NOHCs; and"
          }
        ]
      },
      {
        "title": "Authority",
        "items": [
          {
            "number": "1.",
            "id": "Item-1",
            "text": "This Prudential Standard is made under:"
          }
        ]
      },
      {
        "title": "Application",
        "items": [
          {
            "number": "2.",
            "id": "Item-2",
            "text": "This Prudential Standard applies to all ‘APRA-regulated institutions’, [1] defined as:"
          },
          {
            "number": "3.",
            "id": "Item-3",
            "text": "All APRA-regulated institutions have to comply with this Prudential Standard in its entirety, unless otherwise expressly indicated. The obligations imposed by this Prudential Standard on, or in relation to, a foreign ADI , a Category C insurer or an EFLIC apply only in relation to the Australian branch operations of that institution."
          },
          {
            "number": "4.",
            "id": "Item-4",
            "text": "Where an APRA-regulated institution is the ‘Head of a group’, [2] it must comply with a requirement of this Prudential Standard:"
          },
          {
            "number": "",
            "id": "Item-4",
            "text": "In applying the requirements of this Prudential Standard on a group basis, references in paragraphs 12 to 16 and 25 to 61 to an ‘APRA-regulated institution’ should be read as ‘Head of a group’ and references to ‘institution’ should be read as ‘group’."
          },
          {
            "number": "5.",
            "id": "Item-5",
            "text": "This Prudential Standard commences on 1 July 2019."
          }
        ]
      },
      {
        "title": "Interpretation",
        "items": [
          {
            "number": "6.",
            "id": "Item-6",
            "text": "Terms that are defined in Prudential Standard 3PS 001 Definitions , Prudential Standard APS 001 Definitions ( APS 001 ), Prudential Standard GPS 001 Definitions ( GPS 001 ), Prudential Standard LPS 001 Definitions or Prudential Standard HPS 001 Definitions ( HPS 001 ) appear in bold the first time they are used in this Prudential Standard."
          },
          {
            "number": "7.",
            "id": "Item-7",
            "text": "Where this Prudential Standard provides for APRA to exercise a power or discretion, this power or discretion is to be exercised in writing."
          },
          {
            "number": "8.",
            "id": "Item-8",
            "text": "For the purposes of this Prudential Standard:"
          },
          {
            "number": "9.",
            "id": "Item-9",
            "text": "For the purposes of this Prudential Standard, a reference to an ‘auditor’ is taken to be a reference to a person holding any of the following positions unless otherwise specified:"
          },
          {
            "number": "10.",
            "id": "Item-10",
            "text": "In this Prudential Standard, the term ‘Prudential Acts’ is used to refer to the Banking Act, the Insurance Act and the Life Insurance Act."
          },
          {
            "number": "11.",
            "id": "Item-11",
            "text": "This Prudential Standard specifies:"
          },
          {
            "number": "12.",
            "id": "Item-12",
            "text": "An APRA-regulated institution must prudently manage the risks that persons acting in responsible person positions [6] who are not fit and proper pose to the institution’s business and financial standing. To this end, an APRA-regulated institution must maintain a documented policy relating to the fitness and propriety of the institution’s responsible persons that meets the requirements of this Prudential Standard (Fit and Proper Policy)."
          },
          {
            "number": "13.",
            "id": "Item-13",
            "text": "The Fit and Proper Policy must be approved by the Board . [7]"
          },
          {
            "number": "14.",
            "id": "Item-14",
            "text": "An APRA-regulated institution must take all reasonable steps to ensure that each responsible person is aware of, and understands, the provisions of its Fit and Proper Policy."
          },
          {
            "number": "15.",
            "id": "Item-15",
            "text": "The Fit and Proper Policy must form part of an institution’s risk management framework . [8]"
          },
          {
            "number": "16.",
            "id": "Item-16",
            "text": "Nothing in this Prudential Standard prevents an APRA-regulated institution from adopting and applying a group Fit and Proper Policy used by a related body corporate [9] , provided that the policy has been approved by the Board in accordance with paragraph 13 and meets the requirements of this Prudential Standard."
          },
          {
            "number": "17.",
            "id": "Item-17",
            "text": "The Head of a group must maintain a group Fit and Proper Policy (refer to paragraphs 12 to 16)."
          },
          {
            "number": "18.",
            "id": "Item-18",
            "text": "Where an entity within the group that is not an APRA-regulated institution engages in business activities that may materially affect, either directly or indirectly, the whole, or a substantial part, of the group, the Head of the group must ensure that the responsible persons for those business activities are assessed for fitness and propriety in a way that complies with the group Fit and Proper Policy. [10]"
          },
          {
            "number": "19.",
            "id": "Item-19",
            "text": "The Head of a group must notify APRA in accordance with paragraphs 56 to 61 in respect of each responsible person across the group, except where an APRA-regulated institution within the group has otherwise notified APRA of that information."
          },
          {
            "number": "20.",
            "id": "Item-20",
            "text": "A ‘responsible person’ is:"
          },
          {
            "number": "21.",
            "id": "Item-21",
            "text": "A person need not be an employee of an APRA-regulated institution to be a responsible person. In some circumstances a consultant, contractor or employee of another entity may be a responsible person."
          },
          {
            "number": "22.",
            "id": "Item-22",
            "text": "In addition to persons who meet the definition of a responsible person, APRA may determine that a person is a responsible person if APRA is satisfied that the person plays a significant role in the management or control of the APRA-regulated institution or group, or that the person’s activities may materially impact on prudential matters ."
          },
          {
            "number": "23.",
            "id": "Item-23",
            "text": "APRA may determine that a person is not a responsible person in relation to a particular position, responsibility or activity if APRA is satisfied that the person does not play a significant role in the management or control of the APRA-regulated institution or group or that the person’s activities may not materially impact on prudential matters."
          },
          {
            "number": "24.",
            "id": "Item-24",
            "text": "‘Responsible person position’ means the responsibilities or activities of a responsible person that would lead to the person being a responsible person under the definition in paragraph 20."
          },
          {
            "number": "25.",
            "id": "Item-25",
            "text": "‘Senior manager’, or a person who has or exercises senior management responsibilities [11] , means a person (other than a director ) who:"
          },
          {
            "number": "26.",
            "id": "Item-26",
            "text": "For the purposes of the definition of senior manager in the Prudential Acts [13] and the definition of officer in the PHIPS Act [14] , the responsibilities set out in paragraph 25, when exercised for an APRA-regulated institution, are senior management responsibilities (except where carried out by a director)."
          },
          {
            "number": "27.",
            "id": "Item-27",
            "text": "‘Senior manager’, in relation to a corporate agent of a Category C insurer, means a person (other than a director of the corporate agent) who, when acting for the corporate agent:"
          },
          {
            "number": "28.",
            "id": "Item-28",
            "text": "For the purposes of the definition of senior manager in subsection 3(1) of the Insurance Act, the responsibilities set out in paragraph 27, when exercised for a corporate agent in respect of an APRA-regulated institution, are senior management responsibilities (except when carried out by a director of the corporate agent)."
          },
          {
            "number": "29.",
            "id": "Item-29",
            "text": "An APRA-regulated institution must clearly define and document the competencies required for each responsible person position."
          },
          {
            "number": "30.",
            "id": "Item-30",
            "text": "For the purposes of the Prudential Acts and the PHIPS Act and for the purposes of determining whether a person is fit and proper to hold a responsible person position, the criteria are whether: [16]"
          }
        ]
      },
      {
        "title": "Additional criteria applying to auditors [17]",
        "items": [
          {
            "number": "31.",
            "id": "Item-31",
            "text": "The criteria for fitness and propriety of an auditor for the purposes of the Prudential Acts are those contained in paragraphs 30 and 32. [18]"
          },
          {
            "number": "32.",
            "id": "Item-32",
            "text": "The additional criteria which must be met for an auditor to be fit and proper are that the person:"
          },
          {
            "number": "33.",
            "id": "Item-33",
            "text": "The criteria in paragraph 32 do not apply if the following conditions are met:"
          }
        ]
      },
      {
        "title": "Additional criteria applying to Appointed Actuaries [21]",
        "items": [
          {
            "number": "34.",
            "id": "Item-34",
            "text": "The criteria for fitness and propriety of an Appointed Actuary of a general insurer, a life company or a private health insurer, for the purposes of the Insurance Act, Life Insurance Act and PHIPS Act are those contained in paragraphs 30 and 35 to 37. [22]"
          },
          {
            "number": "35.",
            "id": "Item-35",
            "text": "The additional criteria that must be met for a person to be fit and proper to act as an Appointed Actuary of a general insurer, a life company or a private health insurer are that the person:"
          },
          {
            "number": "36.",
            "id": "Item-36",
            "text": "The criterion in paragraph 35(f) does not apply to the Appointed Actuary of a Category B insurer and a Category C insurer if:"
          },
          {
            "number": "37.",
            "id": "Item-37",
            "text": "The criteria in paragraphs 34 to 36 do not apply while:"
          },
          {
            "number": "38.",
            "id": "Item-38",
            "text": "The Fit and Proper Policy must include the processes to be undertaken in assessing whether a person is fit and proper for a responsible person position (fit and proper assessment). The processes must include details of:"
          },
          {
            "number": "39.",
            "id": "Item-39",
            "text": "The Fit and Proper Policy must specify the actions to be taken where a person is assessed as being not fit and proper."
          },
          {
            "number": "40.",
            "id": "Item-40",
            "text": "The Fit and Proper Policy must provide that a copy of the Policy is to be given to:"
          },
          {
            "number": "41.",
            "id": "Item-41",
            "text": "The Fit and Proper Policy must require a fit and proper assessment to be completed before a person becomes the holder of a responsible person position unless they hold the position:"
          },
          {
            "number": "42.",
            "id": "Item-42",
            "text": "Interim appointment to a responsible person position may be made without a full fit and proper assessment for a period of up to 90 days (or longer with APRA’s written agreement) including any prior period of interim appointment. Prior to making such an appointment, reasonable steps must be taken, as specified in the Fit and Proper Policy, to assess the fitness and propriety of the person. The APRA-regulated institution must complete a full fit and proper assessment prior to appointing the person to the responsible person position on a permanent basis."
          },
          {
            "number": "43.",
            "id": "Item-43",
            "text": "The Fit and Proper Policy must require annual fit and proper assessments (or as close to annual as is practicable) for each responsible person position."
          },
          {
            "number": "44.",
            "id": "Item-44",
            "text": "When a fit and proper assessment is conducted, an APRA-regulated institution must make all reasonable enquiries [24] to obtain information, including collecting sensitive information as defined in the Privacy Act 1988 (Privacy Act), that it believes may be relevant to an assessment of whether the person is fit and proper to hold a responsible person position."
          },
          {
            "number": "45.",
            "id": "Item-45",
            "text": "Where a responsible person has been assessed as fit and proper, but the APRA-regulated institution subsequently becomes aware of information that may result in the person being assessed as not fit and proper, the APRA-regulated institution must take all reasonable steps, including collecting sensitive information as defined in the Privacy Act if relevant, to ensure that it can prudently conclude that no material fitness and propriety concern exists. Where a concern exists, a full fit and proper assessment must be conducted."
          },
          {
            "number": "46.",
            "id": "Item-46",
            "text": "The Fit and Proper Policy must contain adequate provisions:"
          },
          {
            "number": "47.",
            "id": "Item-47",
            "text": "The Fit and Proper Policy must require that sufficient documentation for each fit and proper assessment is retained to demonstrate the fitness and propriety of the institution’s current, and recently past, responsible persons."
          },
          {
            "number": "48.",
            "id": "Item-48",
            "text": "The Fit and Proper Policy must include adequate provisions to allow whistleblowing if a person has information that a responsible person does not meet the APRA-regulated institution’s fit and proper criteria. The Fit and Proper Policy must ensure that the APRA-regulated institution and its subsidiaries consent to the person providing that information to either the person responsible for conducting fit and proper assessments or APRA."
          },
          {
            "number": "49.",
            "id": "Item-49",
            "text": "The Fit and Proper Policy must include adequate provisions to allow persons who have information that the APRA-regulated institution has not complied with this Prudential Standard to provide that information to APRA."
          },
          {
            "number": "50.",
            "id": "Item-50",
            "text": "The Fit and Proper Policy must provide that the APRA-regulated institution and its subsidiaries consent to any person who held a responsible person position disclosing information or providing documents to APRA relating to their reasons for resignation, retirement or removal."
          },
          {
            "number": "51.",
            "id": "Item-51",
            "text": "An APRA-regulated institution must not, and must ensure that its subsidiaries do not, constrain, impede, restrict or discourage, whether by confidentiality clauses, policies or other means, any person from disclosing information or providing documents to APRA about matters referred to in paragraphs 48 to 50. [26]"
          },
          {
            "number": "52.",
            "id": "Item-52",
            "text": "The Fit and Proper Policy must require that all provisions of the Policy encouraging whistleblowing, and the procedures related to whistleblowing, are adequately explained to directors and employees of the APRA-regulated institution and its subsidiaries who are likely to have information relevant to fit and proper assessments."
          },
          {
            "number": "53.",
            "id": "Item-53",
            "text": "APRA does not require that an APRA-regulated institution impose an obligation on any person to make the disclosures under paragraphs 48 to 50. However, the Fit and Proper Policy must require that all reasonable steps be taken to ensure that no person making such disclosures in good faith is subject to, or threatened with, a detriment because of any notification in purported compliance with the requirements of the Fit and Proper Policy."
          },
          {
            "number": "54.",
            "id": "Item-54",
            "text": "Where an APRA-regulated institution has assessed that a person is not fit and proper, or a reasonable person in the APRA-regulated institution’s position would make that assessment, the APRA-regulated institution must take all steps it reasonably can to ensure that the person: [27]"
          },
          {
            "number": "55.",
            "id": "Item-55",
            "text": "An APRA-regulated institution must notify APRA of the following information for each responsible person:"
          },
          {
            "number": "56.",
            "id": "Item-56",
            "text": "An APRA-regulated institution must ensure that the information provided under paragraph 55 remains correct for all of its responsible persons. Subject to the Prudential Acts and the PHIPS Act, it must provide revised information to APRA within 28 days of any change or new appointment."
          },
          {
            "number": "57.",
            "id": "Item-57",
            "text": "An APRA-regulated institution must notify APRA within 10 business days if it assesses that a responsible person is not fit and proper. If the person remains in the responsible person position, the notification must state the reason for this and the action that is being taken."
          },
          {
            "number": "58.",
            "id": "Item-58",
            "text": "The information or notifications required by this Prudential Standard must be given in such form, if any, and by such procedures, if any, as APRA publishes on its website from time to time."
          },
          {
            "number": "59.",
            "id": "Item-59",
            "text": "An APRA-regulated institution must take reasonable steps to:"
          },
          {
            "number": "60.",
            "id": "Item-60",
            "text": "APRA does not and will not require disclosure of spent convictions where precluded under Part VIIC of the Crimes Act 1914 ."
          },
          {
            "number": "61.",
            "id": "Item-61",
            "text": "APRA may adjust or exclude a specific prudential requirement in this Prudential Standard in relation to an APRA-regulated institution. [28]"
          },
          {
            "number": "62.",
            "id": "Item-62",
            "text": "An exercise of APRA’s discretion (such as an approval, waiver or direction) under a previous version of this Prudential Standard continues to have effect as though exercised pursuant to a corresponding power (if any) exercisable by APRA under this Prudential Standard. For the purposes of this paragraph, ‘a previous version of this Prudential Standard’ includes any versions of:"
          },
          {
            "number": "1.",
            "id": "Attachment-A-Item-1",
            "text": "A responsible person of an ADI (other than a foreign ADI) or authorised banking NOHC is any person who is:"
          },
          {
            "number": "2.",
            "id": "Attachment-A-Item-2",
            "text": "References to a subsidiary in sub paragraph 1(e) of this Attachment do not apply to a subsidiary that is an RSE licensee."
          },
          {
            "number": "1.",
            "id": "Attachment-B-Item-1",
            "text": "A responsible person of a foreign ADI is any person who is:"
          },
          {
            "number": "2.",
            "id": "Attachment-B-Item-1",
            "text": "References to a subsidiary in sub paragraph 1(c) of this Attachment do not apply to a subsidiary that is an RSE licensee."
          },
          {
            "number": "1.",
            "id": "Attachment-C-Item-1",
            "text": "A responsible person of a general insurer (other than a Category C insurer) or authorised insurance NOHC is any person who is:"
          },
          {
            "number": "2.",
            "id": "Attachment-C-Item-2",
            "text": "References to a subsidiary in sub paragraph 1(f) of this Attachment do not apply to a subsidiary that is an RSE licensee."
          },
          {
            "number": "1.",
            "id": "Attachment-D-Item-1",
            "text": "A responsible person of a Category C insurer is any person who is:"
          },
          {
            "number": "2.",
            "id": "Attachment-D-Item-2",
            "text": "References to a subsidiary in sub paragraph 1(g) of this Attachment do not apply to a subsidiary that is an RSE licensee."
          },
          {
            "number": "1.",
            "id": "Attachment-E-Item-1",
            "text": "A responsible person of a life company (other than an EFLIC) or registered life NOHC is any person who is:"
          },
          {
            "number": "2.",
            "id": "Attachment-E-Item-2",
            "text": "References to a subsidiary in sub paragraph 1(f) of this Attachment do not apply to a subsidiary that is an RSE licensee ."
          },
          {
            "number": "1.",
            "id": "Attachment-F-Item-1",
            "text": "A responsible person of an EFLIC is any person who is:"
          },
          {
            "number": "2.",
            "id": "Attachment-F-Item-2",
            "text": "References to a subsidiary in sub paragraph 1(e) of this Attachment do not apply to a subsidiary that is an RSE licensee."
          },
          {
            "number": "1.",
            "id": "Attachment-G-Item-1",
            "text": "A responsible person of a private health insurer is any person who is:"
          },
          {
            "number": "2.",
            "id": "Attachment-G-Item-2",
            "text": "References to a subsidiary in sub paragraph 1(e) of this Attachment do not apply to a subsidiary that is an RSE licensee."
          }
        ]
      }
    ],
    "itemCount": 83,
    "sectionCount": 6
  },
  {
    "id": "cps-511",
    "code": "CPS 511",
    "title": "Remuneration",
    "pillar": "governance",
    "href": "https://www.apra.gov.au/standards/cps-511",
    "summary": "Remuneration frameworks that reinforce prudential and risk outcomes.",
    "sections": [
      {
        "title": "Prudential Standard CPS 511 Remuneration",
        "items": [
          {
            "number": "(a)",
            "id": "Item-a",
            "text": "under subsections 11AF(3) of the Banking Act 1959, 32(4) of the Insurance Act 1973 , 230A(5) of the Life Insurance Act 1995 , 92(5) of the Private Health Insurance (Prudential Supervision) Act 2015 and 34C(6) of the Superannuation Industry (Supervision) Act 1993 REVOKE Banking, Insurance, Life Insurance, Health Insurance and Superannuation (prudential standard) determination No. 1 of 2021, including Prudential Standard CPS 511 Remuneration made under that determination;"
          },
          {
            "number": "(b)",
            "id": "Item-b",
            "text": "under subsection 11AF(1) of the Banking Act 1959 DETERMINE the prudential standard, which applies to all ADIs, excluding ADIs referred to in paragraph 2 of the prudential standard, and authorised banking NOHCs;"
          },
          {
            "number": "(c)",
            "id": "Item-c",
            "text": "under subsection 32(1) of the Insurance Act 1973 DETERMINE the prudential standard, which applies to all general insurers and authorised insurance NOHCs, and subsidiaries of general insurers or authorised insurance NOHCs where those subsidiaries are parent entities of Level 2 insurance groups;"
          },
          {
            "number": "(d)",
            "id": "Item-d",
            "text": "under subsection 230A(1) of the Life Insurance Act 1995 DETERMINE the prudential standard, which applies to all life companies, including friendly societies, and registered NOHCs;"
          },
          {
            "number": "(e)",
            "id": "Item-e",
            "text": "under subsection 92(1) of the Private Health Insurance (Prudential Supervision) Act 2015 DETERMINE the prudential standard, which applies to all private health insurers; and"
          },
          {
            "number": "(f)",
            "id": "Item-f",
            "text": "under subsection 34C(1) of the Superannuation Industry (Supervision) Act 1993 DETERMINE the prudential standard, which applies to all RSE licensees."
          }
        ]
      },
      {
        "title": "Authority",
        "items": [
          {
            "number": "1.",
            "id": "Item-1",
            "text": "This Prudential Standard is made under:"
          }
        ]
      },
      {
        "title": "Application",
        "items": [
          {
            "number": "2.",
            "id": "Item-2",
            "text": "Subject to paragraphs 3 and 4, and in accordance with paragraphs 9 to 11, this Prudential Standard applies to all APRA-regulated entities, defined as:"
          },
          {
            "number": "3.",
            "id": "Item-3",
            "text": "The obligations imposed by this Prudential Standard on, or in relation to, a foreign ADI, a Category C insurer or an EFLIC apply only in relation to the Australian branch operations of that entity."
          },
          {
            "number": "4.",
            "id": "Item-4",
            "text": "For the purposes of this Prudential Standard, an APRA-regulated entity is either a significant financial institution (SFI) or a non-significant financial institution (non-SFI). Unless APRA determines otherwise in a particular case, [2] this Prudential Standard applies to these two classes of APRA-regulated entities as follows:"
          },
          {
            "number": "5.",
            "id": "Item-5",
            "text": "Subject to paragraph 7, where an entity is the ‘Head of a group’, [3] it must comply with an applicable requirement of this Prudential Standard:"
          },
          {
            "number": "6.",
            "id": "Item-6",
            "text": "In applying the requirements of this Prudential Standard on a group basis, references in paragraphs 18 to 98 to an ‘APRA-regulated entity’ must be read as ‘Head of a group’ and references to ‘entity’ must be read as ‘group’."
          },
          {
            "number": "7.",
            "id": "Item-7",
            "text": "Unless otherwise determined by APRA, an APRA-regulated entity within a group is not required to make the disclosures required by this Prudential Standard on an individual entity or a Level 2 basis where:"
          },
          {
            "number": "8.",
            "id": "Item-8",
            "text": "This Prudential Standard does not apply to the extent it would require any entity to act (or not act) in a manner contrary to:"
          },
          {
            "number": "9.",
            "id": "Item-9",
            "text": "For an ADI, by operation of the Legislation Act 2003 , this Prudential Standard is to be read and construed subject to the Banking Act, including Part IIAA which imposes requirements relating to remuneration."
          },
          {
            "number": "10.",
            "id": "Item-10",
            "text": "Subject to paragraphs 11, 12 and 13, this Prudential Standard applies:"
          },
          {
            "number": "11.",
            "id": "Item-11",
            "text": "The disclosure requirements of this Prudential Standard, specified in paragraphs 63-73 and paragraphs 91-98, apply to an APRA-regulated entity’s first full financial year that commences on or after 1 January 2024."
          },
          {
            "number": "12.",
            "id": "Item-12",
            "text": "This Prudential Standard does not apply to a person’s variable remuneration if the opportunity to earn the variable remuneration arose before the relevant commencement dates specified in paragraph 10."
          },
          {
            "number": "13.",
            "id": "Item-13",
            "text": "Despite paragraph 12, if:"
          },
          {
            "number": "",
            "id": "Item-13",
            "text": "this Prudential Standard does not apply to the variable remuneration to the extent it would result in such an acquisition. [4]"
          }
        ]
      },
      {
        "title": "Interpretation",
        "items": [
          {
            "number": "14.",
            "id": "Item-14",
            "text": "Terms that are defined in Prudential Standard 3PS 001 Definitions , Prudential Standard APS 001 Definitions ( APS 001 ), Prudential Standard GPS 001 Definitions ( GPS 001 ), Prudential Standard LPS 001 Definitions ( LPS 001 ) or Prudential Standard HPS 001 Definitions ( HPS 001 ) appear in bold the first time they are used in this Prudential Standard."
          },
          {
            "number": "15.",
            "id": "Item-15",
            "text": "In this Prudential Standard, unless the contrary intention appears, a reference to an Act, Regulations, Rules or Prudential Standard is a reference to the Act, Regulations, Rules or Prudential Standard as in force from time to time."
          },
          {
            "number": "16.",
            "id": "Item-16",
            "text": "Where this Prudential Standard provides for APRA to exercise a power or discretion, the power or discretion is to be exercised in writing."
          },
          {
            "number": "17.",
            "id": "Item-17",
            "text": "For the purposes of this Prudential Standard:"
          }
        ]
      },
      {
        "title": "Adjustments and exclusions",
        "items": [
          {
            "number": "18.",
            "id": "Item-18",
            "text": "APRA may adjust or exclude a specific requirement in this Prudential Standard in relation to an APRA-regulated entity."
          }
        ]
      },
      {
        "title": "Previous exercise of discretion",
        "items": [
          {
            "number": "19.",
            "id": "Item-19",
            "text": "An APRA-regulated entity must contact APRA if it seeks to place reliance, for the purposes of complying with this Prudential Standard, on a previous exemption or other exercise of discretion by APRA under Prudential Standard CPS 510 Governance or Prudential Standard SPS 510 Governance ( SPS 510 )."
          }
        ]
      },
      {
        "title": "Definitions",
        "items": [
          {
            "number": "20.",
            "id": "Item-20",
            "text": "The following definitions are used in this Prudential Standard:"
          },
          {
            "number": "21.",
            "id": "Item-21",
            "text": "An APRA -regulated entity must maintain a remuneration framework that:"
          },
          {
            "number": "22.",
            "id": "Item-22",
            "text": "The remuneration framework must include a documented remuneration policy which at minimum sets out:"
          },
          {
            "number": "23.",
            "id": "Item-23",
            "text": "The Board, or relevant oversight function , of an APRA-regulated entity is ultimately responsible for the entity’s remuneration framework and its effective application."
          },
          {
            "number": "24.",
            "id": "Item-24",
            "text": "The Board, or relevant oversight function, must approve the remuneration policy required under paragraph 22 of this Prudential Standard ."
          },
          {
            "number": "25.",
            "id": "Item-25",
            "text": "The Board must establish a Board Remuneration Committee that:"
          },
          {
            "number": "26.",
            "id": "Item-26",
            "text": "The Board Remuneration Committee must have at least three members and all members must be non-executive directors of the entity."
          },
          {
            "number": "27.",
            "id": "Item-27",
            "text": "For an entity that is not an RSE licensee, a majority of members of the Committee must be independent and the chairperson of the Committee must be an independent director of the entity."
          },
          {
            "number": "28.",
            "id": "Item-28",
            "text": "For an RSE licensee, the chairperson of the Board may sit on the Board Remuneration Committee, but may not chair the Committee except where the chairperson of the Board is the only independent director on the Board."
          },
          {
            "number": "29.",
            "id": "Item-29",
            "text": "The Board Remuneration Committee must have a written charter that sets out its roles, responsibilities and terms of operation."
          },
          {
            "number": "30.",
            "id": "Item-30",
            "text": "The Board Remuneration Committee, or relevant oversight function, must consult the Board Risk Committee [11] and Chief Risk Officer or person in a similar role, to enable risk outcomes to be appropriately reflected in remuneration outcomes for persons in specified roles. This consultation must follow a documented process."
          },
          {
            "number": "31.",
            "id": "Item-31",
            "text": "The Board Remuneration Committee, or relevant oversight function, must obtain comprehensive reporting that will allow it to determine whether remuneration outcomes of all remuneration arrangements align with paragraph 21 of this Prudential Standard ."
          },
          {
            "number": "32.",
            "id": "Item-32",
            "text": "The Board Remuneration Committee, or relevant oversight function, in carrying out its duties must:"
          },
          {
            "number": "33.",
            "id": "Item-33",
            "text": "An APRA-regulated entity must design all variable remuneration arrangements to align with paragraph 21 of this Prudential Standard and must incorporate in its variable remuneration arrangements:"
          },
          {
            "number": "34.",
            "id": "Item-34",
            "text": "The determination of each component of a person’s variable remuneration must:"
          },
          {
            "number": "35.",
            "id": "Item-35",
            "text": "An APRA-regulated entity must subject a person’s variable remuneration arrangement to malus."
          },
          {
            "number": "36.",
            "id": "Item-36",
            "text": "An APRA-regulated entity must also subject the variable remuneration arrangement of a senior manager , executive director or a highly-paid material risk-taker to clawback. Clawback arrangements must include the following features:"
          },
          {
            "number": "37.",
            "id": "Item-37",
            "text": "An APRA-regulated entity must set specific criteria for the application of variable remuneration adjustment tools, including at least the following:"
          },
          {
            "number": "38.",
            "id": "Item-38",
            "text": "An APRA-regulated entity must take reasonable steps to appropriately adjust variable remuneration downwards when, as a minimum, any of the criteria specified in paragraph 37 are satisfied. The total downward-adjustment to variable remuneration must be proportionate to the severity of the risk and conduct outcome."
          },
          {
            "number": "39.",
            "id": "Item-39",
            "text": "In circumstances involving a person under investigation for criteria specified in paragraph 37, variable remuneration must not vest until the investigation is closed."
          },
          {
            "number": "40.",
            "id": "Item-40",
            "text": "An APRA-regulated entity must take appropriate steps to assess and mitigate conflicts of interest in the design of its remuneration arrangements, including conflicts that may arise from service contracts."
          },
          {
            "number": "41.",
            "id": "Item-41",
            "text": "An APRA-regulated entity must defer variable remuneration as follows:"
          },
          {
            "number": "42.",
            "id": "Item-42",
            "text": "The deferral period must include the period over which performance is assessed. The deferral period must also include any required service, retention and holding periods."
          },
          {
            "number": "43.",
            "id": "Item-43",
            "text": "Paragraph 41 does not apply in respect of any person with deferred variable remuneration of less than AUD $50,000 in a financial year of the APRA-regulated entity."
          },
          {
            "number": "44.",
            "id": "Item-44",
            "text": "An APRA-regulated entity must:"
          },
          {
            "number": "45.",
            "id": "Item-45",
            "text": "An APRA-regulated entity may only pay or vest variable remuneration to a person if payment or vesting:"
          },
          {
            "number": "46.",
            "id": "Item-46",
            "text": "An APRA-regulated entity’s variable remuneration outcomes must link to and be supported by the entity’s performance management system, code of conduct and consequence management processes."
          },
          {
            "number": "47.",
            "id": "Item-47",
            "text": "An APRA-regulated entity must not accelerate the vesting of unvested variable remuneration for a person in a specified role no longer employed or engaged by the entity, unless specific exceptions [13] have been included in the remuneration policy. If that person is eligible for any unvested variable remuneration, it must be subject to the same vesting conditions as those for a person employed or engaged by the entity."
          },
          {
            "number": "48.",
            "id": "Item-48",
            "text": "An APRA-regulated entity must prudently manage the variable remuneration arrangements of all persons in specified roles."
          },
          {
            "number": "49.",
            "id": "Item-49",
            "text": "The Board Remuneration Committee, or relevant oversight function, must provide clear guidance to senior management on its expectations in determining the appropriate level and timing of risk adjustment to the variable remuneration outcomes for persons in specified roles."
          },
          {
            "number": "50.",
            "id": "Item-50",
            "text": "The Board Remuneration Committee must make recommendations to the Board annually on the remuneration arrangements and variable remuneration outcomes for persons in specified roles as follows:"
          },
          {
            "number": "51.",
            "id": "Item-51",
            "text": "When forming its recommendations under paragraph 50 of this Prudential Standard , the Board Remuneration Committee must:"
          },
          {
            "number": "52.",
            "id": "Item-52",
            "text": "The Board, or relevant oversight function, must approve the variable remuneration outcomes for persons in specified roles as follows:"
          },
          {
            "number": "53.",
            "id": "Item-53",
            "text": "The variable remuneration arrangements for risk and financial control personnel must:"
          },
          {
            "number": "54.",
            "id": "Item-54",
            "text": "An APRA-regulated entity must review compliance of the remuneration framework against the requirements of this Prudential Standard at least annually."
          },
          {
            "number": "55.",
            "id": "Item-55",
            "text": "In addition to the annual review of compliance, the effectiveness of the remuneration framework must be subject to a comprehensive review by operationally independent, appropriately experienced and competent persons at least every three years."
          },
          {
            "number": "56.",
            "id": "Item-56",
            "text": "An APRA-regulated entity must document and report the results of the reviews required under paragraphs 54 and 55 of this Prudential Standard to the Board Remuneration Committee, or relevant oversight function, in a timely manner. The Board Remuneration Committee, or relevant oversight function, must take appropriate and timely action to ensure the findings of these reviews are adequately considered and addressed."
          },
          {
            "number": "57.",
            "id": "Item-57",
            "text": "An APRA-regulated entity’s effectiveness review required under paragraph 55 of this Prudential Standard must assess:"
          },
          {
            "number": "58.",
            "id": "Item-58",
            "text": "Where an APRA-regulated entity identifies a material change to the size, business mix and complexity of the operations outside the review required in paragraph 55, it must consider and address the need to amend or review the remuneration framework to take account of these developments at that time."
          },
          {
            "number": "59.",
            "id": "Item-59",
            "text": "In relation to the requirements for a Board Remuneration Committee and remuneration policy, where an APRA-regulated entity is part of a group , or corporate group in the case of a private health insurer , the Board of the APRA-regulated entity may:"
          },
          {
            "number": "60.",
            "id": "Item-60",
            "text": "An APRA-regulated entity may apply to APRA for approval of alternative Board Remuneration Committee arrangements that meet the objectives of this Prudential Standard. APRA may approve alternative arrangements for the entity if satisfied that those arrangements will, in APRA’s opinion, achieve the objectives of this Prudential Standard."
          },
          {
            "number": "61.",
            "id": "Item-61",
            "text": "Except in circumstances permitted by law, an APRA-regulated entity must not pay any remuneration (whether directly or indirectly) to, or for the benefit of, a person through vehicles or methods that undermine the effect or intent of the requirements of this Prudential Standard. An APRA-regulated entity must at minimum prevent the following:"
          },
          {
            "number": "62.",
            "id": "Item-62",
            "text": "Paragraph 61 does not apply in respect of a liability for legal costs."
          },
          {
            "number": "63.",
            "id": "Item-63",
            "text": "An APRA-regulated entity must make clear, comprehensive, meaningful, consistent and comparable public disclosure of information on its remuneration framework and practices, as set out in this Prudential Standard."
          },
          {
            "number": "64.",
            "id": "Item-64",
            "text": "An APRA-regulated entity must publish the disclosures required under this Prudential Standard in a standalone document on its website or, provided the information is clearly identified as disclosures made for the purpose of complying with the requirements of this Prudential Standard, as part of other disclosures made by the entity that are available on its website. Tables 2, 3 and 4, must be disclosed in a machine-readable format to facilitate the use of the data, such as in the form of a comma-separated values (CSV) file."
          },
          {
            "number": "65.",
            "id": "Item-65",
            "text": "An APRA-regulated entity must make disclosures on a financial year basis for each full financial year of the APRA-regulated entity. For the purposes of disclosures, relevant employees must be counted on a full-time equivalent basis."
          },
          {
            "number": "66.",
            "id": "Item-66",
            "text": "An APRA-regulated entity must make the disclosures under this Prudential Standard as soon as possible after it lodges its annual financial statements with the Australian Securities and Investments Commissions (ASIC), and not more than six months after the end of the financial year to which the disclosures relate. If an entity is not required to lodge financial statements with ASIC, it must make the required disclosures not more than six months after the end of the financial year to which the disclosures relate."
          },
          {
            "number": "67.",
            "id": "Item-67",
            "text": "For the purposes of disclosing Tables 2, 3 and 4:"
          }
        ]
      },
      {
        "title": "Remuneration framework",
        "items": [
          {
            "number": "68.",
            "id": "Item-68",
            "text": "An APRA-regulated entity must disclose information on its remuneration framework as set out in Table 1."
          },
          {
            "number": "(i)",
            "id": "Item-i",
            "text": "oversees remuneration policies;"
          },
          {
            "number": "(ii)",
            "id": "Item-ii",
            "text": "oversees the input provided by:"
          },
          {
            "number": "(iii)",
            "id": "Item-iii",
            "text": "exercises its discretion in determining remuneration outcomes, including remuneration outcomes for variable remuneration awarded in prior financial years."
          },
          {
            "number": "(i)",
            "id": "Item-i",
            "text": "aligns to the APRA-regulated entity’s business plan, strategic objectives and risk management framework;"
          },
          {
            "number": "(ii)",
            "id": "Item-ii",
            "text": "promotes effective management of both financial and non-financial risks, sustainable performance and long-term soundness;"
          },
          {
            "number": "(iii)",
            "id": "Item-iii",
            "text": "supports the prevention and mitigation of conduct risk; and"
          },
          {
            "number": "(iv)",
            "id": "Item-iv",
            "text": "for an RSE licensee, promotes the RSE licensee performing its duties and exercising powers in the best financial interests of beneficiaries."
          },
          {
            "number": "(i)",
            "id": "Item-i",
            "text": "an overview of the main financial and non-financial performance measures for the entity, key business lines, the CEO and other specified roles on a cohort basis;"
          },
          {
            "number": "(ii)",
            "id": "Item-ii",
            "text": "a description of how material weight is applied to non- financial measures in the determination of performance related variable remuneration, including the proportion (level or range) of variable remuneration that would be impacted by non-financial measures, where this is possible to define; and"
          },
          {
            "number": "(iii)",
            "id": "Item-iii",
            "text": "a discussion of how a person’s remuneration is linked to entity-wide and individual performance."
          },
          {
            "number": "(i)",
            "id": "Item-i",
            "text": "remuneration arrangements, including how variable remuneration arrangements reflect their independence, authority and the purpose of their functions, and are not unduly influenced by the performance of the business activities they control;"
          },
          {
            "number": "(ii)",
            "id": "Item-ii",
            "text": "the remuneration outcomes, including variable remuneration outcomes as a proportion (level or range) of fixed remuneration and the nature and proportion of any adjustments made to reflect risk performance; and"
          },
          {
            "number": "(iii)",
            "id": "Item-iii",
            "text": "any special payments made. [18]"
          },
          {
            "number": "(i)",
            "id": "Item-i",
            "text": "forms of remuneration offered;"
          },
          {
            "number": "(ii)",
            "id": "Item-ii",
            "text": "the persons eligible to participate in the plan, as a percentage of their respective cohort of specified role;"
          },
          {
            "number": "(iii)",
            "id": "Item-iii",
            "text": "how it is aligned with the business strategy and effective risk management;"
          },
          {
            "number": "(iv)",
            "id": "Item-iv",
            "text": "how cohort and individual outcomes are determined, including how material weight is given to non-financial measures;"
          },
          {
            "number": "(v)",
            "id": "Item-v",
            "text": "if the mix of variable remuneration differs across persons within a specified role cohort, a description of the factors that determine the mix and their relative importance;"
          },
          {
            "number": "(vi)",
            "id": "Item-vi",
            "text": "how the variable remuneration pool (if any) is determined, including performance and risk measures used;"
          },
          {
            "number": "(vii)",
            "id": "Item-vii",
            "text": "deferral periods and vesting schedules; and"
          },
          {
            "number": "(viii)",
            "id": "Item-viii",
            "text": "any adjustment measures that may differ from Table 1, row 13."
          },
          {
            "number": "(i)",
            "id": "Item-i",
            "text": "an overview of the processes and tools for adjusting variable remuneration, including criteria and triggers for each tool; and"
          },
          {
            "number": "(ii)",
            "id": "Item-ii",
            "text": "an overview of the policy for deferral and vesting of variable remuneration."
          }
        ]
      },
      {
        "title": "Remuneration outcomes",
        "items": [
          {
            "number": "69.",
            "id": "Item-69",
            "text": "An APRA-regulated entity must disclose remuneration outcomes for the financial year as set out in Table 2. Disclosure for the purposes of Table 2 must be on the basis of:"
          }
        ]
      },
      {
        "title": "Special payments",
        "items": [
          {
            "number": "70.",
            "id": "Item-70",
            "text": "An APRA-regulated entity must disclose any special payments made in the financial year as set out in Table 3. [21]"
          },
          {
            "number": "71.",
            "id": "Item-71",
            "text": "A special payment is a one-off :"
          }
        ]
      },
      {
        "title": "Deferred and adjusted variable remuneration",
        "items": [
          {
            "number": "72.",
            "id": "Item-72",
            "text": "An APRA-regulated entity must disclose deferred and adjusted variable remuneration in Table 4. Disclosures for the purposes of Table 4 must include:"
          },
          {
            "number": "73.",
            "id": "Item-73",
            "text": "For each of the cohort of specified roles in Table 4, an APRA-regulated entity must provide a description of the main triggers leading to downward-adjustments to variable remuneration as a result of consequence management."
          },
          {
            "number": "74.",
            "id": "Item-74",
            "text": "An APRA-regulated entity must maintain a remuneration framework that:"
          },
          {
            "number": "75.",
            "id": "Item-75",
            "text": "The remuneration framework must include a documented remuneration policy which at minimum sets out:"
          },
          {
            "number": "76.",
            "id": "Item-76",
            "text": "The Board, or relevant oversight function, of an APRA-regulated entity is ultimately responsible for the entity’s remuneration framework and its effective application."
          },
          {
            "number": "77.",
            "id": "Item-77",
            "text": "The Board, or relevant oversight function, must approve the remuneration policy required under paragraph 75 of this Prudential Standard ."
          },
          {
            "number": "78.",
            "id": "Item-78",
            "text": "An APRA-regulated entity must design all variable remuneration arrangements to align with paragraph 74 of this Prudential Standard and must incorporate in its variable remuneration arrangements:"
          },
          {
            "number": "79.",
            "id": "Item-79",
            "text": "An APRA-regulated entity must subject a person’s variable remuneration arrangement to malus."
          },
          {
            "number": "80.",
            "id": "Item-80",
            "text": "An APRA-regulated entity must set specific criteria for the application of variable remuneration adjustment tools, including at least the following:"
          },
          {
            "number": "81.",
            "id": "Item-81",
            "text": "An APRA-regulated entity must take reasonable steps to appropriately adjust variable remuneration downwards when, as a minimum, any of the criteria specified in paragraph 80 are satisfied. The total downward-adjustment to variable remuneration must be proportionate to the severity of the risk and conduct outcome."
          },
          {
            "number": "82.",
            "id": "Item-82",
            "text": "In circumstances involving a person under investigation for criteria specified in paragraph 80, variable remuneration must not vest until the investigation is closed."
          },
          {
            "number": "83.",
            "id": "Item-83",
            "text": "An APRA-regulated entity must take appropriate steps to assess and mitigate conflicts of interest in the design of its remuneration arrangements, including conflicts that may arise from service contracts."
          },
          {
            "number": "84.",
            "id": "Item-84",
            "text": "Despite paragraph 4, a foreign ADI, Category C insurer or EFLIC with total assets in excess of the threshold set out in the definition of SFI under APS 001 , GPS 001 or LPS 001 respectively must defer variable remuneration of highly-paid material risk-takers in accordance with paragraphs 41(c), 42 and 43 of this Prudential Standard ."
          },
          {
            "number": "85.",
            "id": "Item-85",
            "text": "An APRA-regulated entity must:"
          },
          {
            "number": "86.",
            "id": "Item-86",
            "text": "An APRA-regulated entity must not accelerate the vesting of unvested variable remuneration for a person in a specified role no longer employed or engaged by the entity, unless specific exceptions [23] have been included in the remuneration policy. If that person is eligible for any unvested variable remuneration, it must be subject to the same vesting conditions as those for a person employed or engaged by the entity."
          },
          {
            "number": "87.",
            "id": "Item-87",
            "text": "The Board, or relevant oversight function, must approve the variable remuneration outcomes for persons in specified roles as follows:"
          },
          {
            "number": "88.",
            "id": "Item-88",
            "text": "In relation to the requirements for a remuneration policy, where an APRA-regulated entity is part of a group, or corporate group in the case of a private health insurer, the Board of the APRA-regulated entity may adopt and apply a group remuneration policy that is also used by a related body corporate or a connected entity provided that the group remuneration policy:"
          },
          {
            "number": "89.",
            "id": "Item-89",
            "text": "Except in circumstances permitted by law, an APRA-regulated entity must not pay any remuneration (whether directly or indirectly) to, or for the benefit of, a person through vehicles or methods that undermine the effect or intent of the requirements of this Prudential Standard. An APRA-regulated entity must at minimum prevent the following:"
          },
          {
            "number": "90.",
            "id": "Item-90",
            "text": "Paragraph 89 does not apply in respect of a liability for legal costs."
          },
          {
            "number": "91.",
            "id": "Item-91",
            "text": "An APRA-regulated entity must make clear, comprehensive, meaningful, consistent and comparable public disclosure of information on its remuneration framework and practices, as set out in this Prudential Standard."
          },
          {
            "number": "92.",
            "id": "Item-92",
            "text": "An APRA-regulated entity must publish the disclosures required under this Prudential Standard in a standalone document on its website or, provided the information is clearly identified as disclosures made for the purpose of complying with the requirements of this Prudential Standard, as part of other disclosures made by the entity that are available on its website."
          },
          {
            "number": "93.",
            "id": "Item-93",
            "text": "An APRA-regulated entity must make disclosures on a financial year basis for each full financial year of the APRA-regulated entity."
          },
          {
            "number": "94.",
            "id": "Item-94",
            "text": "An APRA-regulated entity must make the disclosures under this Prudential Standard as soon as possible after it lodges its annual financial statements with ASIC and not more than six months after the end of the financial year to which the disclosures relate. If an entity is not required to lodge financial statements with ASIC, it must make the required disclosures not more than six months after the end of the financial year to which the disclosures relate."
          },
          {
            "number": "95.",
            "id": "Item-95",
            "text": "APRA may determine that a non-SFI comply with the quantitative disclosure requirements set out in paragraphs 63 to 73 of this Prudential Standard . [25]"
          }
        ]
      },
      {
        "title": "Qualitative disclosures",
        "items": [
          {
            "number": "96.",
            "id": "Item-96",
            "text": "An APRA-regulated entity must disclose information on the governance of the remuneration framework. This must include:"
          },
          {
            "number": "97.",
            "id": "Item-97",
            "text": "An APRA-regulated entity must disclose information on the design and structure of its remuneration framework. This must include a description of how it:"
          },
          {
            "number": "98.",
            "id": "Item-98",
            "text": "An APRA-regulated entity must disclose information on its remuneration policy, including:"
          }
        ]
      }
    ],
    "itemCount": 128,
    "sectionCount": 12
  },
  {
    "id": "cps-220",
    "code": "CPS 220",
    "title": "Risk Management",
    "pillar": "risk-management",
    "href": "https://www.apra.gov.au/standards/cps-220",
    "summary": "Risk framework, appetite, ownership, and scenario analysis.",
    "sections": [
      {
        "title": "Prudential Standard CPS 220 Risk Management",
        "items": [
          {
            "number": "(a)",
            "id": "Item-a",
            "text": "under subsection 11AF(3) of the Banking Act 1959 REVOKE Banking, Insurance, Life Insurance and Health Insurance (prudential standard) determination No. 1 of 2017, including Prudential Standard CPS 220 Risk Management made under that Determination;"
          },
          {
            "number": "(b)",
            "id": "Item-b",
            "text": "under subsection 32(4) of the Insurance Act 1973 REVOKE Banking, Insurance Life Insurance and Health Insurance (prudential standard) determination No. 1 of 2017, including Prudential Standard CPS 220 Risk Management made under that Determination;"
          },
          {
            "number": "(c)",
            "id": "Item-c",
            "text": "under subsection 230A(5) of the Life Insurance Act 1995 REVOKE Banking, Insurance Life Insurance and Health Insurance (prudential standard) determination No. 1 of 2017, including Prudential Standard CPS 220 Risk Management made under that Determination;"
          },
          {
            "number": "(d)",
            "id": "Item-d",
            "text": "under subsection 92(5) of the Private Health Insurance (Prudential Supervision) Act 2015 REVOKE Banking, Insurance, Life Insurance and Health Insurance (prudential standard) determination No. 1 of 2017, including Prudential Standard CPS 220 Risk Management made under that Determination;"
          },
          {
            "number": "(e)",
            "id": "Item-e",
            "text": "under subsection 11AF(1) of the Banking Act 1959 DETERMINE Prudential Standard CPS 220 Risk Management in the form set out in the Schedule, to the extent that it applies to all ADIs and authorised banking NOHCs;"
          },
          {
            "number": "(f)",
            "id": "Item-f",
            "text": "under subsection 32(1) of the Insurance Act 1973 DETERMINE Prudential Standard CPS 220 Risk Management in the form set out in the Schedule, to the extent that it applies to all general insurers, authorised insurance NOHCs, and subsidiaries of general insurers and authorised insurance NOHCs;"
          },
          {
            "number": "(g)",
            "id": "Item-g",
            "text": "under subsection 230A(1) of the Life Insurance Act 1995 DETERMINE Prudential Standard CPS 220 Risk Management in the form set out in the Schedule, which applies to all life companies, friendly societies, registered life NOHCs, and subsidiaries of life companies and registered life NOHCs; and"
          }
        ]
      },
      {
        "title": "Authority",
        "items": [
          {
            "number": "1.",
            "id": "Item-1",
            "text": "This Prudential Standard is made under:"
          }
        ]
      },
      {
        "title": "Application",
        "items": [
          {
            "number": "2.",
            "id": "Item-2",
            "text": "This Prudential Standard applies to all ‘APRA-regulated institutions’ [1] defined as:"
          },
          {
            "number": "3.",
            "id": "Item-3",
            "text": "APRA-regulated institutions must comply with this Prudential Standard in its entirety, unless otherwise expressly indicated. The obligations imposed by this Prudential Standard on, or in relation to, a foreign ADI , a Category C insurer or an EFLIC apply only in relation to the Australian branch operations of that institution."
          },
          {
            "number": "4.",
            "id": "Item-4",
            "text": "Where an APRA-regulated institution is the ‘Head of a group’, [2] it must comply with a requirement of this Prudential Standard:"
          },
          {
            "number": "",
            "id": "Item-4",
            "text": "In applying the requirements of this Prudential Standard on a group basis, references in paragraphs 9, 19 to 56, and Attachment A to an ‘APRA-regulated institution’ should be read as ‘Head of a group’ and references to ‘institution’ should be read as ‘group’."
          },
          {
            "number": "5.",
            "id": "Item-5",
            "text": "This Prudential Standard commences on 1 July 2019."
          }
        ]
      },
      {
        "title": "Interpretation",
        "items": [
          {
            "number": "6.",
            "id": "Item-6",
            "text": "In this Prudential Standard:"
          },
          {
            "number": "7.",
            "id": "Item-7",
            "text": "Where this Prudential Standard provides for APRA to exercise a power or discretion, this power or discretion is to be exercised in writing."
          },
          {
            "number": "8.",
            "id": "Item-8",
            "text": "For the purposes of this Prudential Standard:"
          },
          {
            "number": "9.",
            "id": "Item-9",
            "text": "The Board [3] of an APRA-regulated institution is ultimately responsible for the institution’s risk management framework and is responsible for the oversight of its operation by management. In particular, the Board must ensure that:"
          },
          {
            "number": "10.",
            "id": "Item-10",
            "text": "An APRA-regulated institution that is part of a group or other corporate group may meet requirements of this Prudential Standard using group risk management frameworks, policies, procedures or functions, provided that the Board of the institution is satisfied that the requirements are met in respect of that institution."
          },
          {
            "number": "11.",
            "id": "Item-11",
            "text": "For the avoidance of doubt, compliance by a group with the requirements of this Prudential Standard does not relieve an APRA-regulated institution within the group from the need to comply with any prudential requirements of that institution."
          },
          {
            "number": "12.",
            "id": "Item-12",
            "text": "Where an APRA-regulated institution is part of a group and any element of the risk management framework is controlled or influenced by another entity in the group, the institution’s risk management framework must specifically take into account risks arising from the group framework, and clearly identify:"
          },
          {
            "number": "13.",
            "id": "Item-13",
            "text": "Where APRA is of the view that the fulfilment of a requirement of this Prudential Standard by a group does not adequately address the requirement for an APRA-regulated institution within that group, APRA may require that institution to meet the requirement on a separate basis within a reasonable timeframe specified by APRA."
          },
          {
            "number": "14.",
            "id": "Item-14",
            "text": "As part of the group risk management framework (see paragraphs 19 to 25), the Head of a group must maintain processes to coordinate the identification, measurement, evaluation, monitoring, reporting, and controlling or mitigation of all material risks across the group, in normal times and periods of stress. The Head of a group must ensure its Board has a comprehensive group-wide view of all material risks, including an understanding of the roles and relationships of subsidiaries to one another and to the Head of a group."
          },
          {
            "number": "15.",
            "id": "Item-15",
            "text": "The group risk management function (see paragraphs 37 to 42) does not need to be a function of the Head of a group, but may be a function located elsewhere in the group. The group chief risk officer (CRO) cannot be the roles specified in paragraph 39 for any institution within the group."
          },
          {
            "number": "16.",
            "id": "Item-16",
            "text": "The Head of a group must notify APRA in accordance with paragraphs 52 to 55 in respect of the group risk management framework, except where an APRA-regulated institution within the group has otherwise notified APRA of that information."
          },
          {
            "number": "17.",
            "id": "Item-17",
            "text": "The Head of a group must maintain a Board-approved liquidity management policy for the group to adequately and consistently identify, measure, monitor, and manage its material liquidity risks. The policy must include a strategy that ensures the group has sufficient liquidity to meet its obligations as they fall due, including in stressed conditions, and outline processes to identify existing and potential constraints on the transfer of funds within the group. The Head of a group must submit to APRA a copy of its group liquidity management policy as soon as practicable, and no more than 10 business days , after Board approval."
          },
          {
            "number": "18.",
            "id": "Item-18",
            "text": "Where an institution within the group that is not an APRA-regulated institution engages in business activities that may pose a material risk to the group, the Head of the group must ensure that the risk management framework addresses the risks posed by that institution to the group and depositors, policyholders or RSE beneficiaries. [4]"
          },
          {
            "number": "19.",
            "id": "Item-19",
            "text": "An APRA-regulated institution must maintain a risk management framework for the institution that enables it to appropriately develop and implement strategies, policies, procedures and controls to manage different types of material risks, and provides the Board with a comprehensive institution-wide view of material risks. [5]"
          },
          {
            "number": "20.",
            "id": "Item-20",
            "text": "The risk management framework is the totality of systems, structures, policies, processes and people within an institution that identify, measure, evaluate, monitor, report and control or mitigate all internal and external sources of material risk. Material risks are those that could have a material impact, both financial and non-financial, on the institution or on the interests of depositors and/or policyholders."
          },
          {
            "number": "21.",
            "id": "Item-21",
            "text": "The risk management framework must be consistent with the business plan required under paragraph 31."
          },
          {
            "number": "22.",
            "id": "Item-22",
            "text": "The risk management framework must provide a structure for identifying and managing each material risk to ensure the institution is being prudently and soundly managed, having regard to the size, business mix and complexity of its operations."
          },
          {
            "number": "23.",
            "id": "Item-23",
            "text": "The risk management framework must, at a minimum, include:"
          },
          {
            "number": "24.",
            "id": "Item-24",
            "text": "The risk management framework must include forward-looking scenario analysis and stress testing programs, commensurate with the institution’s size, business mix and complexity, and which are based on severe but plausible assumptions."
          },
          {
            "number": "25.",
            "id": "Item-25",
            "text": "The MIS must provide the Board of the APRA-regulated institution, board committees of the APRA-regulated institution and senior management of the institution with regular, accurate and timely information concerning the institution’s risk profile. The MIS must be supported by a robust data framework that enables the aggregation of exposures and risk measures across business lines, prompt reporting of limit breaches, and forward-looking scenario analysis and stress testing. Data quality must be adequate for timely and accurate measurement, assessment and reporting on all material risks across the institution and must provide a sound basis for making decisions."
          },
          {
            "number": "26.",
            "id": "Item-26",
            "text": "The risk management framework must, at a minimum, address:"
          },
          {
            "number": "27.",
            "id": "Item-27",
            "text": "An APRA-regulated institution must maintain an appropriate, clear and concise risk appetite statement for the institution that addresses the institution’s material risks. The Board is responsible for setting the risk appetite of the institution and must approve the institution’s risk appetite statement."
          },
          {
            "number": "28.",
            "id": "Item-28",
            "text": "The risk appetite statement must, at a minimum, convey:"
          },
          {
            "number": "29.",
            "id": "Item-29",
            "text": "An APRA-regulated institution must maintain an RMS for the institution that addresses each material risk listed under paragraph 26. The RMS must be approved by the Board."
          },
          {
            "number": "30.",
            "id": "Item-30",
            "text": "The RMS is a document that describes the strategy for managing risk and the key elements of the risk management framework that give effect to this strategy. At a minimum, an RMS must:"
          },
          {
            "number": "31.",
            "id": "Item-31",
            "text": "An APRA-regulated institution must maintain a written plan for the institution that sets out its approach for the implementation of its strategic objectives (business plan)."
          },
          {
            "number": "32.",
            "id": "Item-32",
            "text": "The business plan must be a rolling plan of at least three years’ duration that is reviewed at least annually, with the results of the review reported to the Board. The business plan must cover the entirety of the institution and be approved by the Board."
          },
          {
            "number": "33.",
            "id": "Item-33",
            "text": "An APRA-regulated institution must identify and consider the material risks associated with the institution’s strategic objectives and business plan, and must explicitly manage these risks through the risk management framework, including how changing these plans affects the institution’s risk profile."
          },
          {
            "number": "34.",
            "id": "Item-34",
            "text": "The requirement for a business plan does not apply to a run-off insurer provided that the run-off insurer complies with Prudential Standard GPS 110 Capital Adequacy ."
          },
          {
            "number": "35.",
            "id": "Item-35",
            "text": "The policies and procedures required under subparagraph 30(b) must include:"
          },
          {
            "number": "36.",
            "id": "Item-36",
            "text": "An APRA-regulated institution must monitor the date when each policy or procedure was last revised, the date that it is next due for review, and who is responsible for the review."
          },
          {
            "number": "37.",
            "id": "Item-37",
            "text": "An APRA-regulated institution must have a designated risk management function for the institution that, at a minimum:"
          },
          {
            "number": "38.",
            "id": "Item-38",
            "text": "An APRA-regulated institution must designate a person to be responsible for that function, referred to in this standard as a CRO. The CRO must be involved in, and have the authority to provide effective challenge to, activities and decisions that may materially affect the institution’s risk profile."
          },
          {
            "number": "39.",
            "id": "Item-39",
            "text": "The CRO must be independent from business lines, other revenue-generating responsibilities and the finance function. The CRO must not be the Chief Executive Officer (CEO), Chief Financial Officer, Appointed Actuary or Head of Internal Audit."
          },
          {
            "number": "40.",
            "id": "Item-40",
            "text": "The CRO must have a direct reporting line to the CEO, and have regular and unfettered access to the Board and the Board Risk Committee."
          },
          {
            "number": "41.",
            "id": "Item-41",
            "text": "Where an APRA-regulated institution believes that the requirements in paragraphs 39 and 40 are inappropriate for its particular circumstances, it may propose alternative arrangements to APRA. Proposals for alternative arrangements must outline the circumstances that are particular to that institution and include details of, and supporting reasons for, these arrangements. APRA may approve alternative arrangements for the institution if satisfied that those arrangements, in APRA’s view, achieve the objectives of this Prudential Standard."
          },
          {
            "number": "42.",
            "id": "Item-42",
            "text": "An APRA-regulated institution may engage the services of an external service provider to perform part of the risk management function where the APRA-regulated institution can demonstrate to APRA that the risk management function meets the requirements in paragraph 37. [8]"
          },
          {
            "number": "43.",
            "id": "Item-43",
            "text": "An APRA-regulated institution must have a designated compliance function that assists senior management of the institution in effectively managing compliance risks. The compliance function must be adequately staffed by appropriately trained and competent persons who have sufficient authority to perform their role effectively, and have a reporting line independent from business lines."
          },
          {
            "number": "44.",
            "id": "Item-44",
            "text": "An APRA-regulated institution must ensure that compliance with, and the effectiveness of, the risk management framework of the institution is subject to review by internal and/or external audit at least annually. The results of this review must be reported to the institution’s Board Audit Committee, the senior officer outside of Australia or Compliance Committee, as relevant."
          },
          {
            "number": "45.",
            "id": "Item-45",
            "text": "An APRA-regulated institution must, in addition to paragraph 44, ensure that the appropriateness, effectiveness and adequacy of the institution’s risk management framework are subject to a comprehensive review by operationally independent, appropriately trained and competent persons (this may include external consultants) at least every three years. [9] The results of this review must be reported to the institution’s Board Risk Committee, the senior officer outside Australia or Compliance Committee, as relevant."
          },
          {
            "number": "46.",
            "id": "Item-46",
            "text": "The scope of the comprehensive review must have regard to the size, business mix and complexity of the institution, the extent of any change to its operations or risk appetite, and any changes to the external environment in which the institution operates."
          },
          {
            "number": "47.",
            "id": "Item-47",
            "text": "The comprehensive review of the risk management framework must, at a minimum, assess whether:"
          },
          {
            "number": "48.",
            "id": "Item-48",
            "text": "Where a material change to the size, business mix and complexity of the operations is identified outside the review required in paragraph 45, the APRA-regulated institution must assess whether any amendment to, or a review of, the risk management framework is necessary to take account of these developments at that time."
          },
          {
            "number": "49.",
            "id": "Item-49",
            "text": "The Board of an APRA-regulated institution must make an annual declaration to APRA on risk management of the institution (risk management declaration) that must satisfy the requirements set out in Attachment A to this Prudential Standard . The declaration must be signed by the chairperson of the Board and the chairperson of the Board Risk Committee. In the case of a Category C insurer, foreign ADI, or EFLIC, the risk management declaration must be signed by the senior officer outside Australia or two members of the Compliance Committee, as relevant."
          },
          {
            "number": "50.",
            "id": "Item-50",
            "text": "The Board of an APRA-regulated institution must qualify the risk management declaration of the institution if there has been any significant breach of, or material deviation from, the risk management framework or the requirements set out in Attachment A to this Prudential Standard . Any qualification must include a description of the cause and circumstances of the qualification and steps taken, or proposed to be taken, to remedy the problem. [10]"
          },
          {
            "number": "51.",
            "id": "Item-51",
            "text": "Unless otherwise approved by APRA, an APRA-regulated institution must submit the risk management declaration of the institution to APRA:"
          },
          {
            "number": "52.",
            "id": "Item-52",
            "text": "An APRA-regulated institution must on adoption, and following any material revisions, submit to APRA a copy of the institution’s:"
          },
          {
            "number": "53.",
            "id": "Item-53",
            "text": "An APRA-regulated institution must notify APRA as soon as practicable, and no more than 10 business days, after it becomes aware:"
          },
          {
            "number": "54.",
            "id": "Item-54",
            "text": "An APRA-regulated institution must notify APRA as soon as practicable, and no more than 10 business days, after it becomes aware of any material or prospective material changes to the size, business mix and complexity of the institution."
          },
          {
            "number": "55.",
            "id": "Item-55",
            "text": "Where an APRA-regulated institution conducts business in a jurisdiction outside Australia, it must notify APRA as soon as practicable, and no more than 10 business days, after it becomes aware that its right to conduct business in that jurisdiction has been materially affected by the law of that jurisdiction or its right to conduct business has ceased."
          },
          {
            "number": "56.",
            "id": "Item-56",
            "text": "APRA may adjust or exclude a specific requirement in this Prudential Standard in relation to an APRA-regulated institution. [11]"
          },
          {
            "number": "57.",
            "id": "Item-57",
            "text": "An exercise of APRA’s discretion under a previous version of a risk management prudential standard continues to have effect under this Prudential Standard. For the purposes of this paragraph, ‘a previous version of a risk management prudential standard’ includes any versions of:"
          },
          {
            "number": "1.",
            "id": "Attachment-A-Item-1",
            "text": "For the purposes of paragraph 49 of this Prudential Standard , the Board of an APRA-regulated institution must provide APRA with a risk management declaration of the institution stating that, to the best of its knowledge and having made appropriate enquiries, in all material respects:"
          }
        ]
      }
    ],
    "itemCount": 66,
    "sectionCount": 4
  },
  {
    "id": "cps-230",
    "code": "CPS 230",
    "title": "Operational Risk Management",
    "pillar": "risk-management",
    "href": "https://www.apra.gov.au/standards/cps-230",
    "summary": "Operational risk, service-provider management, critical operations, and continuity.",
    "sections": [
      {
        "title": "Prudential Standard CPS 230 Operational Risk Management",
        "items": [
          {
            "number": "(a)",
            "id": "Item-a",
            "text": "under subsections 11AF(3) of the Banking Act, 32(4) of the Insurance Act, and 230A(5) of the Life Insurance Act, REVOKE Banking, Insurance and Life Insurance (prudential standard ) determination No. 6 of 2016 including Prudential Standard CPS 231 Outsourcing made under that determination;"
          },
          {
            "number": "(b)",
            "id": "Item-b",
            "text": "under subsections 11AF(3) of the Banking Act, 32(4) of the Insurance Act, and 230A(5) of the Life Insurance Act, REVOKE Banking, Insurance and Life Insurance (prudential standard) determination No. 7 of 2016 including Prudential Standard CPS 232 Business Continuity Management made under that determination;"
          },
          {
            "number": "(c)",
            "id": "Item-c",
            "text": "under subsection 92(5) of the PHIPS Act, REVOKE Health Insurance (prudential standard) determination No. 4 of 2015 , including Prudential Standard HPS 231 Outsourcing made under that determination;"
          },
          {
            "number": "(d)",
            "id": "Item-d",
            "text": "under subsection 34C(6) of the SIS Act, REVOKE Superannuation (prudential standard) determination No. 3 of 2012 including, Prudential Standard SPS 231 Outsourcing made under that determination, and Superannuation (prudential standard) determination No. 4 of 2012 including Prudential Standard SPS 232 Business Continuity Management made under that determination;"
          },
          {
            "number": "(e)",
            "id": "Item-e",
            "text": "under subsection 11AF(1) of the Banking Act, DETERMINE the prudential standard which applies to all ADIs and authorised banking NOHCs;"
          },
          {
            "number": "(f)",
            "id": "Item-f",
            "text": "under subsection 32(1) of the Insurance Act, DETERMINE the prudential standard which applies to all general insurers and authorised insurance NOHCs and subsidiaries of general insurers and authorised insurance NOHCs;"
          },
          {
            "number": "(g)",
            "id": "Item-g",
            "text": "under subsection 230A(1) of the Life Insurance Act, DETERMINE the prudential standard which applies to all life companies, including friendly societies, and registered NOHCs;"
          },
          {
            "number": "(h)",
            "id": "Item-h",
            "text": "under subsection 92(1) of the PHIPS Act, DETERMINE the prudential standard which applies to all private health insurers; and"
          },
          {
            "number": "(i)",
            "id": "Item-i",
            "text": "under subsection 34C(1) of the SIS Act, DETERMINE the prudential standard which applies to all RSE licensees."
          }
        ]
      },
      {
        "title": "Authority",
        "items": [
          {
            "number": "1.",
            "id": "Item-1",
            "text": "This Prudential Standard is made under:"
          }
        ]
      },
      {
        "title": "Application",
        "items": [
          {
            "number": "2.",
            "id": "Item-2",
            "text": "This Prudential Standard applies to all APRA-regulated entities defined as:"
          },
          {
            "number": "3.",
            "id": "Item-3",
            "text": "The obligations imposed by this Prudential Standard on, or in relation to, a foreign ADI, a Category C insurer and an EFLIC apply only in relation to the Australian branch operations of that entity."
          },
          {
            "number": "4.",
            "id": "Item-4",
            "text": "Where an APRA-regulated entity is the Head of a group, [2] it must comply with a requirement of this Prudential Standard:"
          },
          {
            "number": "5.",
            "id": "Item-5",
            "text": "In applying the requirements of this Prudential Standard on a group basis, references to an APRA-regulated entity are to be read as ‘Head of a group’ and references to entity are to be read as ‘group’."
          }
        ]
      },
      {
        "title": "Transitional Arrangements",
        "items": [
          {
            "number": "6.",
            "id": "Item-6",
            "text": "Where an APRA-regulated entity has pre-existing contractual arrangements in place with a service provider, the requirements in this Prudential Standard will apply in relation to those arrangements from the earlier of the next renewal date of the contract with the service provider or 1 July 2026."
          },
          {
            "number": "7.",
            "id": "Item-7",
            "text": "Deferred requirements apply to an APRA-regulated entity that is a non-significant financial institution (non-SFI) from 1 July 2026. Despite the revocation of Prudential Standard CPS 232 Business Continuity Management ( CPS 232 ) and Prudential Standard SPS 232 Business Continuity Management ( SPS 232 ), existing requirements continue to apply to the relevant non-SFIs until 30 June 2026, as if that revocation had not happened."
          }
        ]
      },
      {
        "title": "Interpretation",
        "items": [
          {
            "number": "8.",
            "id": "Item-8",
            "text": "Terms that are defined in Prudential Standard APS 001 Definitions , Prudential Standard GPS 001 Definitions , Prudential Standard LPS 001 Definitions , Prudential Standard HPS 001 Definitions or Prudential Standard 3PS 001 Definitions appear in bold the first time they are used in this Prudential Standard."
          },
          {
            "number": "9.",
            "id": "Item-9",
            "text": "In this Prudential Standard, unless the contrary intention appears, a reference to an Act, Regulation or Prudential Standard is a reference to the Act, Regulation or Prudential Standard as in force from time to time."
          },
          {
            "number": "10.",
            "id": "Item-10",
            "text": "Where this Prudential Standard provides for APRA to exercise a power or discretion, the power or discretion is to be exercised in writing."
          }
        ]
      },
      {
        "title": "Adjustments and exclusions",
        "items": [
          {
            "number": "11.",
            "id": "Item-11",
            "text": "APRA may adjust or exclude a specific prudential requirement in this Prudential Standard in relation to an APRA-regulated entity. [5]"
          },
          {
            "number": "12.",
            "id": "Item-12",
            "text": "An APRA-regulated entity must:"
          },
          {
            "number": "13.",
            "id": "Item-13",
            "text": "An APRA-regulated entity must identify, assess and manage operational risks that may result from inadequate or failed internal processes or systems, the actions or inactions of people or external drivers and events. Operational risk is inherent in all products, activities, processes and systems."
          },
          {
            "number": "14.",
            "id": "Item-14",
            "text": "An APRA-regulated entity must, to the extent practicable, prevent disruption to critical operations, adapt processes and systems to continue to operate within tolerance levels in the event of a disruption and return to normal operations promptly once a disruption is over."
          },
          {
            "number": "15.",
            "id": "Item-15",
            "text": "An APRA-regulated entity must not rely on a service provider unless it can ensure that in doing so it can continue to meet its prudential obligations in full and effectively manage the associated risks."
          },
          {
            "number": "16.",
            "id": "Item-16",
            "text": "As part of its risk management framework required under Prudential Standard CPS 220 Risk Management ( CPS 220 ) and Prudential Standard SPS 220 Risk Management ( SPS 220 ), an APRA-regulated entity must develop and maintain:"
          },
          {
            "number": "17.",
            "id": "Item-17",
            "text": "As part of the required reviews of the risk management framework under CPS 220 and SPS 220 , an APRA-regulated entity must review its operational risk management. [6] The reviews must cover those aspects of operational risk management set out in paragraph 16."
          },
          {
            "number": "18.",
            "id": "Item-18",
            "text": "Operational risk management must be integrated into an APRA-regulated entity’s overall risk management framework and processes. Business continuity planning must be consistent with, and not conflict or undermine, an APRA-regulated entity’s recovery and exit planning. [7]"
          },
          {
            "number": "19.",
            "id": "Item-19",
            "text": "Where APRA considers that an APRA-regulated entity’s operational risk management has material weaknesses, APRA may:"
          },
          {
            "number": "20.",
            "id": "Item-20",
            "text": "The Board of an APRA-regulated entity is ultimately accountable for oversight of an entity’s operational risk management. This includes business continuity and the management of service provider arrangements. [9]"
          },
          {
            "number": "21.",
            "id": "Item-21",
            "text": "The Board must ensure that the APRA-regulated entity sets clear roles and responsibilities for senior managers [10] for operational risk management, including business continuity and the management of service provider arrangements."
          },
          {
            "number": "22.",
            "id": "Item-22",
            "text": "The Board must:"
          },
          {
            "number": "23.",
            "id": "Item-23",
            "text": "Senior management of an APRA-regulated entity must provide clear and comprehensive information to the Board on the expected impacts on the entity’s critical operations when the Board is making decisions that could affect the resilience of critical operations."
          },
          {
            "number": "24.",
            "id": "Item-24",
            "text": "An APRA-regulated entity must manage its full range of operational risks, including but not limited to legal risk, regulatory risk, compliance risk, conduct risk, technology risk, data risk and change management risk. Senior management are responsible for operational risk management across the end-to-end process for all business operations."
          },
          {
            "number": "25.",
            "id": "Item-25",
            "text": "An APRA-regulated entity must maintain appropriate and sound information and information technology (IT) capability to meet its current and projected business requirements and to support its critical operations and risk management. In managing technology risks, an APRA-regulated entity must monitor the age and health of its information assets and meet the requirements for information security in Prudential Standard CPS 234 Information Security ( CPS 234 ) ."
          }
        ]
      },
      {
        "title": "Operational risk profile and assessment",
        "items": [
          {
            "number": "26.",
            "id": "Item-26",
            "text": "An APRA-regulated entity must assess the impact of its business and strategic decisions on its operational risk profile and operational resilience, as part of its business and strategic planning processes. [11] This must include an assessment of the impact of new products, services, geographies and technologies on its operational risk profile."
          },
          {
            "number": "27.",
            "id": "Item-27",
            "text": "An APRA-regulated entity must maintain a comprehensive assessment of its operational risk profile. As part of this, an APRA-regulated entity must:"
          },
          {
            "number": "28.",
            "id": "Item-28",
            "text": "An APRA-regulated entity must conduct a comprehensive risk assessment before providing a material service to another party, to ensure that the APRA-regulated entity is able to continue to meet its prudential obligations after entering into the arrangement. APRA may require an APRA-regulated entity to review and strengthen internal controls or processes where APRA considers there to be heightened prudential risks in such circumstances."
          }
        ]
      },
      {
        "title": "Operational risk controls",
        "items": [
          {
            "number": "29.",
            "id": "Item-29",
            "text": "An APRA-regulated entity must design, implement and embed internal controls to mitigate its operational risks in line with its risk appetite and meet its compliance obligations."
          },
          {
            "number": "30.",
            "id": "Item-30",
            "text": "An APRA-regulated entity must regularly monitor, review and test controls for design and operating effectiveness, the frequency of which must be commensurate with the materiality of the risks being controlled. The results of testing must be reported to senior management and any gaps or deficiencies in the control environment must be rectified in a timely manner."
          },
          {
            "number": "31.",
            "id": "Item-31",
            "text": "An APRA-regulated entity must remediate material weaknesses in its operational risk management, including control gaps, weaknesses and failures. This remediation must be supported by clear accountabilities and assurance and address the root causes of weaknesses in a timely manner. An APRA-regulated entity must include identified control gaps, weaknesses and failures in its operational risk profile until such matters are remediated."
          }
        ]
      },
      {
        "title": "Operational risk incidents",
        "items": [
          {
            "number": "32.",
            "id": "Item-32",
            "text": "An APRA-regulated entity must ensure that operational risk incidents and near misses are identified, escalated, recorded and addressed in a timely manner. An APRA-regulated entity must take incidents and near misses into account in its assessment of its operational risk profile and control effectiveness in a timely manner."
          },
          {
            "number": "33.",
            "id": "Item-33",
            "text": "An APRA-regulated entity must notify APRA as soon as possible, and not later than 72 hours, after becoming aware of an operational risk incident that it determines to be likely to have a material financial impact or a material impact on the ability of the entity to maintain its critical operations. [12]"
          },
          {
            "number": "34.",
            "id": "Item-34",
            "text": "An APRA-regulated entity must:"
          }
        ]
      },
      {
        "title": "Critical operations and tolerance levels",
        "items": [
          {
            "number": "35.",
            "id": "Item-35",
            "text": "Critical operations are processes undertaken by an APRA-regulated entity or its service provider which, if disrupted beyond tolerance levels, would have a material adverse impact on its depositors, policyholders, beneficiaries or other customers, or its role in the financial system."
          },
          {
            "number": "36.",
            "id": "Item-36",
            "text": "An APRA-regulated entity must, at a minimum, classify the following business operations as critical operations, unless it can justify otherwise:"
          },
          {
            "number": "37.",
            "id": "Item-37",
            "text": "APRA may require an APRA-regulated entity, or a class of APRA-regulated entities, to classify a business operation as a critical operation."
          },
          {
            "number": "38.",
            "id": "Item-38",
            "text": "For each critical operation, an APRA-regulated entity must establish tolerance levels for:"
          },
          {
            "number": "39.",
            "id": "Item-39",
            "text": "APRA may require an APRA-regulated entity to review and change its tolerance levels for a critical operation. APRA may set tolerance levels for an APRA-regulated entity, or a class of APRA-regulated entities, where it identifies a heightened risk or material weakness."
          }
        ]
      },
      {
        "title": "Business continuity plan",
        "items": [
          {
            "number": "40.",
            "id": "Item-40",
            "text": "An APRA-regulated entity’s BCP must include:"
          },
          {
            "number": "41.",
            "id": "Item-41",
            "text": "An APRA-regulated entity must maintain the capabilities required to execute the BCP, including access to people, resources and technology. [14] An APRA-regulated entity must monitor compliance with its tolerance levels and report any failure to meet tolerance levels, together with a remediation plan, to the Board."
          },
          {
            "number": "42.",
            "id": "Item-42",
            "text": "An APRA-regulated entity must notify APRA as soon as possible, and not later than 24 hours after, if it has suffered a disruption to a critical operation outside tolerance. The notification must cover the nature of the disruption, the action taken, the likely impact on the entity’s business operations and the timeframe for returning to normal operations."
          }
        ]
      },
      {
        "title": "Testing and review",
        "items": [
          {
            "number": "43.",
            "id": "Item-43",
            "text": "An APRA-regulated entity must have a systematic testing program for its BCP that covers all critical operations and includes an annual business continuity exercise. The program must test the effectiveness of the entity’s BCP and its ability to meet tolerance levels in a range of severe but plausible scenarios."
          },
          {
            "number": "44.",
            "id": "Item-44",
            "text": "The testing program must be tailored to the material risks of the APRA-regulated entity and include a range of severe but plausible scenarios, including disruptions to services provided by material service providers and scenarios where contingency arrangements are required. APRA may require the inclusion of an APRA-determined scenario in a business continuity exercise for an APRA-regulated entity, or a class of APRA-regulated entities."
          },
          {
            "number": "45.",
            "id": "Item-45",
            "text": "An APRA-regulated entity must update, as necessary, its BCP on an annual basis to reflect any changes in legal or organisational structure, business mix, strategy or risk profile or for shortcomings identified as a result of the review and testing of the BCP."
          },
          {
            "number": "46.",
            "id": "Item-46",
            "text": "An APRA-regulated entity’s internal audit function must periodically review the entity’s BCP and provide assurance to the Board that the BCP sets out a credible plan for how the entity would maintain its critical operations within tolerance levels through severe disruptions and that testing procedures are adequate and have been conducted satisfactorily."
          },
          {
            "number": "47.",
            "id": "Item-47",
            "text": "An APRA-regulated entity must maintain a comprehensive service provider management policy. The policy must cover how the entity will identify material service providers and manage service provider arrangements, including the management of material risks associated with the arrangements."
          },
          {
            "number": "48.",
            "id": "Item-48",
            "text": "The policy must include:"
          }
        ]
      },
      {
        "title": "Material service providers",
        "items": [
          {
            "number": "49.",
            "id": "Item-49",
            "text": "An APRA-regulated entity must identify and maintain a register of its material service providers and manage the material risks associated with using these providers. Material service providers are those on which the entity relies to undertake a critical operation or that expose it to material operational risk. [16] Material arrangements are those on which the entity relies to undertake a critical operation or that expose it to material operational risk."
          },
          {
            "number": "50.",
            "id": "Item-50",
            "text": "An APRA-regulated entity must, at a minimum, classify a provider of the following services as a material service provider, unless it can justify otherwise:"
          },
          {
            "number": "51.",
            "id": "Item-51",
            "text": "An APRA-regulated entity must submit its register of material service providers to APRA on an annual basis."
          },
          {
            "number": "52.",
            "id": "Item-52",
            "text": "APRA may require an APRA-regulated entity, or a class of APRA-regulated entities, to classify a service provider, type of service provider or service provider arrangement as material."
          }
        ]
      },
      {
        "title": "Service provider agreements",
        "items": [
          {
            "number": "53.",
            "id": "Item-53",
            "text": "Before entering into or materially modifying a material arrangement, an APRA-regulated entity must:"
          },
          {
            "number": "54.",
            "id": "Item-54",
            "text": "For all material arrangements, an APRA-regulated entity must maintain a formal legally binding agreement (formal agreement). The formal agreement must, at a minimum:"
          },
          {
            "number": "55.",
            "id": "Item-55",
            "text": "The formal agreement must also include provisions that:"
          },
          {
            "number": "56.",
            "id": "Item-56",
            "text": "For each material arrangement an APRA-regulated entity must:"
          },
          {
            "number": "57.",
            "id": "Item-57",
            "text": "APRA may require an APRA-regulated entity to review and make changes to a service provider arrangement where it identifies heightened prudential concerns."
          }
        ]
      },
      {
        "title": "Monitoring, notifications and review",
        "items": [
          {
            "number": "58.",
            "id": "Item-58",
            "text": "An APRA-regulated entity must monitor and ensure that senior management receive reporting on material arrangements commensurate with the nature and usage of the service. This monitoring must include a regular assessment of:"
          },
          {
            "number": "59.",
            "id": "Item-59",
            "text": "An APRA-regulated entity must notify APRA:"
          },
          {
            "number": "60.",
            "id": "Item-60",
            "text": "An APRA-regulated entity’s internal audit function must review any proposed material arrangement involving the outsourcing of a critical operation. The internal audit function must regularly report to the Board or Board Audit Committee on compliance of such arrangements with the entity’s service provider management policy."
          }
        ]
      }
    ],
    "itemCount": 69,
    "sectionCount": 15
  },
  {
    "id": "cps-234",
    "code": "CPS 234",
    "title": "Information Security",
    "pillar": "risk-management",
    "href": "https://www.apra.gov.au/standards/cps-234",
    "summary": "Security capability, testing, incident response, and control maintenance.",
    "sections": [
      {
        "title": "Prudential Standard CPS 234 Information Security",
        "items": [
          {
            "number": "(a)",
            "id": "Item-a",
            "text": "under subsection 11AF(1) of the Banking Act 1959 , DETERMINE Prudential Standard CPS 234 Information Security in the form set out in the Schedule, which applies to all ADIs and authorised banking NOHCs;"
          },
          {
            "number": "(b)",
            "id": "Item-b",
            "text": "under subsection 32(1) of the Insurance Act 1973 DETERMINE Prudential Standard CPS 234 Information Security in the form set out in the Schedule, which applies to all general insurers and authorised insurance NOHCs;"
          },
          {
            "number": "(c)",
            "id": "Item-c",
            "text": "under subsection 230A(1) of the Life Insurance Act 1995 DETERMINE Prudential Standard CPS 234 Information Security in the form set out in the Schedule, which applies to all life companies, including friendly societies, and registered life NOHCs;"
          },
          {
            "number": "(d)",
            "id": "Item-d",
            "text": "under subsection 92(1) of the Private Health Insurance (Prudential Supervision) Act 2015 DETERMINE Prudential Standard CPS 234 Information Security in the form set out in the Schedule, which applies to all private health insurers; and"
          },
          {
            "number": "(e)",
            "id": "Item-e",
            "text": "under subsection 34C(1) of the Superannuation Industry (Supervision) Act 1993 DETERMINE Prudential Standard CPS 234 Information Security in the form set out in the Schedule, which applies to all RSE licensees."
          }
        ]
      },
      {
        "title": "Authority",
        "items": [
          {
            "number": "1.",
            "id": "Item-1",
            "text": "This Prudential Standard is made under:"
          }
        ]
      },
      {
        "title": "Application",
        "items": [
          {
            "number": "2.",
            "id": "Item-2",
            "text": "This Prudential Standard applies to all ‘APRA-regulated entities’ defined as:"
          },
          {
            "number": "3.",
            "id": "Item-3",
            "text": "The obligations imposed by this Prudential Standard on, or in relation to, a foreign ADI , a Category C insurer or an EFLIC apply only in relation to the Australian branch operations of that entity."
          },
          {
            "number": "4.",
            "id": "Item-4",
            "text": "Where an APRA-regulated entity is the ‘Head of a group’, [2] it must comply with a requirement of this Prudential Standard:"
          },
          {
            "number": "",
            "id": "Item-4",
            "text": "In applying the requirements of this Prudential Standard on a group basis, references in paragraphs 13 to 36 to an ‘APRA-regulated entity’ are to be read as ‘Head of a group’ and references to ‘entity’ are to be read as ‘group’."
          },
          {
            "number": "5.",
            "id": "Item-5",
            "text": "This Prudential Standard commences on 1 July 2019, subject to paragraph 6."
          },
          {
            "number": "6.",
            "id": "Item-6",
            "text": "Where an APRA-regulated entity’s information assets are managed by a third party, the requirements in this Prudential Standard will apply in relation to those information assets from the earlier of the next renewal date of the contract with the third party or 1 July 2020."
          }
        ]
      },
      {
        "title": "Interpretation",
        "items": [
          {
            "number": "7.",
            "id": "Item-7",
            "text": "Terms that are defined in Prudential Standard APS 001 Definitions ( APS 001 ), Prudential Standard GPS 001 Definitions ( GPS 001 ), Prudential Standard LPS 001 Definitions , Prudential Standard HPS 001 Definitions or Prudential Standard 3PS 001 Definitions appear in bold the first time they are used in this Prudential Standard."
          },
          {
            "number": "8.",
            "id": "Item-8",
            "text": "In this Prudential Standard, unless the contrary intention appears, a reference to an Act, Regulation or Prudential Standard is a reference to the Act, Regulation or Prudential Standard as in force from time to time."
          },
          {
            "number": "9.",
            "id": "Item-9",
            "text": "Where this Prudential Standard provides for APRA to exercise a power or discretion, the power or discretion is to be exercised in writing."
          },
          {
            "number": "10.",
            "id": "Item-10",
            "text": "For the purposes of this Prudential Standard:"
          }
        ]
      },
      {
        "title": "Adjustments and exclusions",
        "items": [
          {
            "number": "11.",
            "id": "Item-11",
            "text": "APRA may adjust or exclude a specific prudential requirement in this Prudential Standard in relation to an APRA-regulated entity. [3]"
          }
        ]
      },
      {
        "title": "Definitions",
        "items": [
          {
            "number": "12.",
            "id": "Item-12",
            "text": "The following definitions are used in this Prudential Standard:"
          },
          {
            "number": "13.",
            "id": "Item-13",
            "text": "The Board [4] of an APRA-regulated entity (Board) is ultimately responsible for the information security of the entity. The Board must ensure that the entity maintains information security in a manner commensurate with the size and extent of threats to its information assets, and which enables the continued sound operation of the entity. [5]"
          },
          {
            "number": "14.",
            "id": "Item-14",
            "text": "An APRA-regulated entity must clearly define the information security-related roles and responsibilities of the Board, senior management, governing bodies and individuals with responsibility for decision-making, approval, oversight, operations and other information security functions. [6]"
          },
          {
            "number": "15.",
            "id": "Item-15",
            "text": "An APRA-regulated entity must maintain an information security capability commensurate with the size and extent of threats to its information assets, and which enables the continued sound operation of the entity."
          },
          {
            "number": "16.",
            "id": "Item-16",
            "text": "Where information assets are managed by a related party or third party, the APRA-regulated entity must assess the information security capability of that party, commensurate with the potential consequences of an information security incident affecting those assets. [7]"
          },
          {
            "number": "17.",
            "id": "Item-17",
            "text": "An APRA-regulated entity must actively maintain its information security capability with respect to changes in vulnerabilities and threats, including those resulting from changes to information assets or its business environment."
          },
          {
            "number": "18.",
            "id": "Item-18",
            "text": "An APRA-regulated entity must maintain an information security policy framework commensurate with its exposures to vulnerabilities and threats."
          },
          {
            "number": "19.",
            "id": "Item-19",
            "text": "An APRA-regulated entity’s information security policy framework must provide direction on the responsibilities of all parties who have an obligation to maintain information security. [8]"
          },
          {
            "number": "20.",
            "id": "Item-20",
            "text": "An APRA-regulated entity must classify its information assets, including those managed by related parties and third parties, by criticality and sensitivity. This classification must reflect the degree to which an information security incident affecting an information asset has the potential to affect, financially or non-financially, the entity or the interests of depositors, policyholders, beneficiaries or other customers."
          },
          {
            "number": "21.",
            "id": "Item-21",
            "text": "An APRA-regulated entity must have information security controls to protect its information assets, including those managed by related parties and third parties, that are implemented in a timely manner and that are commensurate with:"
          },
          {
            "number": "22.",
            "id": "Item-22",
            "text": "Where an APRA-regulated entity’s information assets are managed by a related party or third party, the APRA-regulated entity must evaluate the design of that party’s information security controls that protects the information assets of the APRA-regulated entity. [10]"
          },
          {
            "number": "23.",
            "id": "Item-23",
            "text": "An APRA-regulated entity must have robust mechanisms in place to detect and respond to information security incidents in a timely manner."
          },
          {
            "number": "24.",
            "id": "Item-24",
            "text": "An APRA-regulated entity must maintain plans to respond to information security incidents that the entity considers could plausibly occur (information security response plans)."
          },
          {
            "number": "25.",
            "id": "Item-25",
            "text": "An APRA-regulated entity’s information security response plans must include the mechanisms in place for:"
          },
          {
            "number": "26.",
            "id": "Item-26",
            "text": "An APRA-regulated entity must annually review and test its information security response plans to ensure they remain effective and fit-for-purpose."
          },
          {
            "number": "27.",
            "id": "Item-27",
            "text": "An APRA-regulated entity must test the effectiveness of its information security controls through a systematic testing program. The nature and frequency of the systematic testing must be commensurate with:"
          },
          {
            "number": "28.",
            "id": "Item-28",
            "text": "Where an APRA-regulated entity’s information assets are managed by a related party or a third party, and the APRA-regulated entity is reliant on that party’s information security control testing, the APRA-regulated entity must assess whether the nature and frequency of testing of controls in respect of those information assets is commensurate with paragraphs 27(a) to 27(e) of this Prudential Standard. [12]"
          },
          {
            "number": "29.",
            "id": "Item-29",
            "text": "An APRA-regulated entity must escalate and report to the Board or senior management any testing results that identify information security control deficiencies that cannot be remediated in a timely manner."
          },
          {
            "number": "30.",
            "id": "Item-30",
            "text": "An APRA-regulated entity must ensure that testing is conducted by appropriately skilled and functionally independent specialists."
          },
          {
            "number": "31.",
            "id": "Item-31",
            "text": "An APRA-regulated entity must review the sufficiency of the testing program at least annually or when there is a material change to information assets or the business environment."
          },
          {
            "number": "32.",
            "id": "Item-32",
            "text": "An APRA-regulated entity’s internal audit activities must include a review of the design and operating effectiveness of information security controls, including those maintained by related parties and third parties (information security control assurance)."
          },
          {
            "number": "33.",
            "id": "Item-33",
            "text": "An APRA-regulated entity must ensure that the information security control assurance is provided by personnel appropriately skilled in providing such assurance."
          },
          {
            "number": "34.",
            "id": "Item-34",
            "text": "An APRA-regulated entity’s internal audit function must assess the information security control assurance provided by a related party or third party where:"
          },
          {
            "number": "35.",
            "id": "Item-35",
            "text": "An APRA-regulated entity must notify APRA as soon as possible and, in any case, no later than 72 hours, after becoming aware of an information security incident that:"
          },
          {
            "number": "36.",
            "id": "Item-36",
            "text": "An APRA-regulated entity must notify APRA as soon as possible and, in any case, no later than 10 business days, after it becomes aware of a material information security control weakness which the entity expects it will not be able to remediate in a timely manner."
          }
        ]
      }
    ],
    "itemCount": 42,
    "sectionCount": 6
  },
  {
    "id": "cps-900",
    "code": "CPS 900",
    "title": "Resolution Planning",
    "pillar": "recovery-resolution",
    "href": "https://www.apra.gov.au/standards/cps-900",
    "summary": "Resolution planning, critical functions, portability, and customer continuity.",
    "sections": [
      {
        "title": "Prudential Standard CPS 900 Resolution Planning",
        "items": [
          {
            "number": "(a)",
            "id": "Item-a",
            "text": "under subsection 11AF(1) of the Banking Act 1959 DETERMINE the prudential standard , which applies to all ADIs and authorised banking NOHCs;"
          },
          {
            "number": "(b)",
            "id": "Item-b",
            "text": "under subsection 32(1) of the Insurance Act 1973 DETERMINE the prudential standard, which applies to all general insurers and authorised insurance NOHCs, and subsidiaries of general insurers or authorised insurance NOHCs where those subsidiaries are parent entities of Level 2 insurance groups;"
          },
          {
            "number": "(c)",
            "id": "Item-c",
            "text": "under subsection 230A(1) of the Life Insurance Act 1995 DETERMINE the prudential standard, which applies to all life companies, including friendly societies, and registered life NOHCs;"
          },
          {
            "number": "(d)",
            "id": "Item-d",
            "text": "under subsection 92(1) of the Private Health Insurance (Prudential Supervision) Act 2015 DETERMINE the prudential standard, which applies to all private health insurers; and"
          },
          {
            "number": "(e)",
            "id": "Item-e",
            "text": "under subsection 34C(1) of the Superannuation Industry (Supervision) Act 1993 DETERMINE the prudential standard, which applies to all RSE licensees."
          }
        ]
      },
      {
        "title": "Authority",
        "items": [
          {
            "number": "1.",
            "id": "Item-1",
            "text": "This Prudential Standard is made under:"
          }
        ]
      },
      {
        "title": "Application and commencement",
        "items": [
          {
            "number": "2.",
            "id": "Item-2",
            "text": "Subject to paragraphs 3 and 4, this Prudential Standard applies to all ‘APRA-regulated entities’ defined as:"
          },
          {
            "number": "3.",
            "id": "Item-3",
            "text": "The obligations imposed by this Prudential Standard on, or in relation to, a foreign ADI , a Category C insurer or an EFLIC apply only in relation to the Australian branch operations of that entity."
          },
          {
            "number": "4.",
            "id": "Item-4",
            "text": "For the purposes of this Prudential Standard, an APRA-regulated entity is either a significant financial institution ( SFI ) or a non-significant financial institution ( non-SFI ). This Prudential Standard applies to SFIs, and non-SFIs determined by APRA to provide critical functions."
          },
          {
            "number": "5.",
            "id": "Item-5",
            "text": "Where an APRA-regulated entity is the Head of a group, [2] , [3] it must comply with an applicable requirement of this Prudential Standard:"
          },
          {
            "number": "6.",
            "id": "Item-6",
            "text": "In applying the requirements of this Prudential Standard on a group basis, references to an ‘APRA-regulated entity’ must be read as ‘Head of a group’ and references to ‘entity’ must be read as ‘group’."
          },
          {
            "number": "7.",
            "id": "Item-7",
            "text": "This Prudential Standard commences on 1 January 2024. An APRA-regulated entity will be subject to the requirements of this Prudential Standard following notification from APRA."
          }
        ]
      },
      {
        "title": "Interpretation",
        "items": [
          {
            "number": "8.",
            "id": "Item-8",
            "text": "Terms that are defined in Prudential Standard 3PS 001 Definitions ( 3PS 001 ), Prudential Standard APS 001 Definitions ( APS 001 ), Prudential Standard GPS 001 Definitions ( GPS 001 ), Prudential Standard LPS 001 Definitions ( LPS 001 ) or Prudential Standard HPS 001 Definitions ( HPS 001 ) appear in bold the first time they are used in this Prudential Standard."
          },
          {
            "number": "9.",
            "id": "Item-9",
            "text": "In this Prudential Standard, unless the contrary intention appears, a reference to an Act, Regulations or Prudential Standard is a reference to the Act, Regulations or Prudential Standard as in force from time to time."
          },
          {
            "number": "10.",
            "id": "Item-10",
            "text": "Where this Prudential Standard provides for APRA to exercise a power or discretion, the power or discretion is to be exercised in writing."
          }
        ]
      },
      {
        "title": "Definitions",
        "items": [
          {
            "number": "11.",
            "id": "Item-11",
            "text": "The following definitions are used in this Prudential Standard:"
          }
        ]
      },
      {
        "title": "Adjustments and exclusions",
        "items": [
          {
            "number": "12.",
            "id": "Item-12",
            "text": "APRA may adjust or exclude a specific requirement in this Prudential Standard in relation to an APRA-regulated entity."
          },
          {
            "number": "13.",
            "id": "Item-13",
            "text": "APRA may determine a bespoke resolution plan for an APRA-regulated entity or APRA-regulated entities, setting out the steps that APRA may take to protect beneficiaries and maintain critical functions in the event of a resolution. Resolution options may include a wind-down, transfer, or recapitalisation of an entity."
          },
          {
            "number": "14.",
            "id": "Item-14",
            "text": "An APRA-regulated entity must support APRA in the development and maintenance of a resolution plan."
          },
          {
            "number": "15.",
            "id": "Item-15",
            "text": "An APRA-regulated entity with overseas operations must support the development and maintenance of cross-border components of the resolution plan."
          },
          {
            "number": "16.",
            "id": "Item-16",
            "text": "The Board of an APRA-regulated entity must support APRA in resolution planning and is ultimately responsible for ensuring that the entity meets the requirements of this Prudential Standard. The Board must ensure that there are clear roles and responsibilities at a senior executive level for the purpose of meeting the requirements in this Prudential Standard."
          },
          {
            "number": "17.",
            "id": "Item-17",
            "text": "The Board must provide oversight of and approve, where applicable:"
          },
          {
            "number": "18.",
            "id": "Item-18",
            "text": "An APRA-regulated entity must support APRA in the determination of whether it provides any critical functions, if required by APRA."
          },
          {
            "number": "19.",
            "id": "Item-19",
            "text": "APRA may require an APRA-regulated entity to undertake critical functions analysis, taking into account the systemic impact, customer impact and the substitutability by other providers if functions were to cease. An APRA-regulated entity may also be required to identify shared services, including those provided by third parties, upon which critical functions depend."
          },
          {
            "number": "20.",
            "id": "Item-20",
            "text": "APRA may require an APRA-regulated entity to conduct a resolvability assessment to assess the feasibility of resolution options. The resolvability assessment must be conducted by personnel with appropriate skills and experience."
          },
          {
            "number": "21.",
            "id": "Item-21",
            "text": "For each resolution option , the resolvability assessment must assess:"
          },
          {
            "number": "22.",
            "id": "Item-22",
            "text": "APRA may require an APRA-regulated entity to have the resolvability assessment independently reviewed."
          },
          {
            "number": "23.",
            "id": "Item-23",
            "text": "APRA may require an APRA-regulated entity to develop and implement a pre-positioning plan to remove barriers to the execution of resolution options and mitigate execution risks."
          },
          {
            "number": "24.",
            "id": "Item-24",
            "text": "The pre-positioning plan must include, where applicable:"
          },
          {
            "number": "25.",
            "id": "Item-25",
            "text": "APRA may require an APRA-regulated entity to implement additional pre-positioning actions if necessary to support the resolution plan."
          },
          {
            "number": "26.",
            "id": "Item-26",
            "text": "An APRA-regulated entity must maintain the financial resources required to support the resolution plan."
          },
          {
            "number": "27.",
            "id": "Item-27",
            "text": "APRA may require an APRA-regulated entity that is not an RSE licensee to maintain an amount of loss-absorbing capacity to support the resolution plan:"
          },
          {
            "number": "28.",
            "id": "Item-28",
            "text": "An APRA-regulated entity must establish and maintain the capabilities required to support the resolution plan. These include:"
          },
          {
            "number": "29.",
            "id": "Item-29",
            "text": "APRA may require an APRA-regulated entity to establish and maintain additional capabilities if necessary to support the resolution plan."
          },
          {
            "number": "30.",
            "id": "Item-30",
            "text": "APRA may adjust the prudential requirements of an APRA-regulated entity where barriers to resolution are not addressed or where capabilities to support the resolution plan are insufficient, including changes to capital requirements where relevant."
          },
          {
            "number": "31.",
            "id": "Item-31",
            "text": "APRA may require an APRA-regulated entity to:"
          },
          {
            "number": "32.",
            "id": "Item-32",
            "text": "An APRA-regulated entity that is subject to resolution planning under this Prudential Standard must review and update the critical functions analysis and resolvability assessment at least every three years, or as otherwise determined by APRA. The review must be conducted by operationally independent, appropriately experienced and competent persons. The APRA-regulated entity must submit to APRA a report of the review as soon as practicable after the report is finalised."
          },
          {
            "number": "33.",
            "id": "Item-33",
            "text": "Where appropriate, the review must recommend changes to the pre-positioning plan to reflect any changes in organisational structure, strategy, risk profile or the external environment that could affect the APRA-regulated entity’s resolvability. The review must also recommend any changes to resources and capabilities necessary to support the resolution plan."
          },
          {
            "number": "34.",
            "id": "Item-34",
            "text": "An APRA-regulated entity must notify APRA of material changes to its business or operations that may create a barrier to resolution."
          }
        ]
      }
    ],
    "itemCount": 39,
    "sectionCount": 6
  }
];
