export type ComplaintStatus = 'new' | 'allotted' | 'sent';

export interface Complaint {
  id: string;
  referenceNo: string;
  receivedAt: string;
  complainantName: string;
  contactNumber: string;
  incidentLocation: string;
  policeStation: string;
  summary: string;
  letter: string;
  status: ComplaintStatus;
  allottedSection?: string;
  assignedOfficer?: string;
}

export interface IncomingFirRequest {
  id: string;
  complaintId: string;
  firDraftNo: string;
  policeStation: string;
  allottedSection: string;
  assignedOfficer: string;
  receivedAt: string;
  status: 'pending' | 'accepted';
}

export interface Officer {
  id: string;
  name: string;
  badgeNumber: string;
  position: string;
  policeStation: string;
  phone: string;
  email: string;
  shift: string;
  status: 'available' | 'on-duty' | 'off-duty';
}

export const complaints: Complaint[] = [
  {
    id: 'c1',
    referenceNo: 'WA-2026-001',
    receivedAt: '2026-02-06T09:15:00',
    complainantName: 'Anita Rao',
    contactNumber: '98765 43210',
    incidentLocation: 'Road No. 12, Banjara Hills',
    policeStation: 'Banjara Hills PS',
    summary: 'Two-wheeler theft reported outside a commercial complex.',
    letter:
      'To,\nThe Station House Officer,\nBanjara Hills Police Station\n\nSubject: Complaint regarding theft of two-wheeler.\n\nI, Anita Rao, wish to report that my two-wheeler (TS09AB2345) was stolen from the parking area outside the commercial complex on Road No. 12, Banjara Hills on 05 Feb 2026 at approximately 8:30 PM. I request you to take necessary action.\n\nRegards,\nAnita Rao\nContact: 98765 43210',
    status: 'new',
  },
  {
    id: 'c2',
    referenceNo: 'WA-2026-002',
    receivedAt: '2026-02-06T11:40:00',
    complainantName: 'Mohammed Faiz',
    contactNumber: '99887 66554',
    incidentLocation: 'Kukatpally, KPHB Colony',
    policeStation: 'Kukatpally PS',
    summary: 'Physical altercation between neighbors resulting in injuries.',
    letter:
      'To,\nThe Station House Officer,\nKukatpally Police Station\n\nSubject: Complaint regarding assault.\n\nI, Mohammed Faiz, state that on 06 Feb 2026 at 9:45 AM, I was assaulted by my neighbor during a parking dispute in KPHB Colony. I received minor injuries and request appropriate legal action.\n\nRegards,\nMohammed Faiz\nContact: 99887 66554',
    status: 'allotted',
    allottedSection: 'IPC 323 - Assault',
    assignedOfficer: 'SI Priya Reddy',
  },
  {
    id: 'c3',
    referenceNo: 'WA-2026-003',
    receivedAt: '2026-02-07T08:20:00',
    complainantName: 'Rahul Mehta',
    contactNumber: '91234 56789',
    incidentLocation: 'Madhapur, Cyber Towers',
    policeStation: 'Madhapur PS',
    summary: 'Online fraud via fake investment scheme.',
    letter:
      'To,\nThe Station House Officer,\nMadhapur Police Station\n\nSubject: Complaint regarding online fraud.\n\nI, Rahul Mehta, was cheated of Rs. 1,20,000 through a fake investment scheme shared via a messaging platform. The transaction took place on 04 Feb 2026. I request registration of my complaint and investigation.\n\nRegards,\nRahul Mehta\nContact: 91234 56789',
    status: 'sent',
    allottedSection: 'IPC 420 - Cheating',
    assignedOfficer: 'Inspector M. Venkatesh',
  },
];

export const incomingFirRequests: IncomingFirRequest[] = [
  {
    id: 'r1',
    complaintId: 'c2',
    firDraftNo: 'FIR-DRAFT/2026/002',
    policeStation: 'Kukatpally PS',
    allottedSection: 'IPC 323 - Assault',
    assignedOfficer: 'SI Priya Reddy',
    receivedAt: '2026-02-06T12:10:00',
    status: 'pending',
  },
  {
    id: 'r2',
    complaintId: 'c3',
    firDraftNo: 'FIR-DRAFT/2026/003',
    policeStation: 'Madhapur PS',
    allottedSection: 'IPC 420 - Cheating',
    assignedOfficer: 'Inspector M. Venkatesh',
    receivedAt: '2026-02-07T08:45:00',
    status: 'accepted',
  },
];

export const officers: Officer[] = [
  {
    id: 'o1',
    name: 'SI Priya Reddy',
    badgeNumber: 'TS-4321',
    position: 'Sub-Inspector',
    policeStation: 'Kukatpally PS',
    phone: '98765 11223',
    email: 'priya.reddy@tspolice.gov.in',
    shift: 'Day',
    status: 'on-duty',
  },
  {
    id: 'o2',
    name: 'Inspector M. Venkatesh',
    badgeNumber: 'TS-1189',
    position: 'Inspector',
    policeStation: 'Madhapur PS',
    phone: '98877 66554',
    email: 'm.venkatesh@tspolice.gov.in',
    shift: 'Day',
    status: 'available',
  },
  {
    id: 'o3',
    name: 'SI Rajesh Kumar',
    badgeNumber: 'TS-2210',
    position: 'Sub-Inspector',
    policeStation: 'Gachibowli PS',
    phone: '99887 22110',
    email: 'rajesh.kumar@tspolice.gov.in',
    shift: 'Night',
    status: 'off-duty',
  },
  {
    id: 'o4',
    name: 'Constable Sunitha',
    badgeNumber: 'TS-7792',
    position: 'Police Constable',
    policeStation: 'Banjara Hills PS',
    phone: '98766 44558',
    email: 'sunitha.c@tspolice.gov.in',
    shift: 'Day',
    status: 'available',
  },
  {
    id: 'o5',
    name: 'SI Imran Khan',
    badgeNumber: 'TS-3308',
    position: 'Sub-Inspector',
    policeStation: 'Charminar PS',
    phone: '98989 33088',
    email: 'imran.khan@tspolice.gov.in',
    shift: 'Evening',
    status: 'on-duty',
  },
  {
    id: 'o6',
    name: 'Inspector D. Srinivas',
    badgeNumber: 'TS-5511',
    position: 'Inspector',
    policeStation: 'Secunderabad PS',
    phone: '90011 55221',
    email: 'd.srinivas@tspolice.gov.in',
    shift: 'Night',
    status: 'available',
  },
];
