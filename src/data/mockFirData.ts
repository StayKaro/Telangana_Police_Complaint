export type FirStatus = 'filed' | 'ongoing' | 'closed';

export interface FirNote {
  id: string;
  firId: string;
  noteContent: string;
  officerName: string;
  createdAt: string;
}

export interface FirStatusHistory {
  id: string;
  firId: string;
  status: FirStatus;
  changedAt: string;
  notes?: string;
}

export interface Fir {
  id: string;
  firNumber: string;
  dateFiled: string;
  sectionIpc: string;
  policeStation: string;
  complainantName: string;
  complainantDetails: string;
  accusedDetails: string;
  incidentDescription: string;
  status: FirStatus;
  createdAt: string;
  updatedAt: string;
}

export const mockFirs: Fir[] = [
  // Filed FIRs
  {
    id: '1',
    firNumber: 'FIR/2025/HYD/001',
    dateFiled: '2025-02-01',
    sectionIpc: 'IPC 379 - Theft',
    policeStation: 'Banjara Hills PS',
    complainantName: 'Ramesh Kumar',
    complainantDetails: 'Address: Plot 45, Jubilee Hills, Hyderabad. Phone: 9876543210',
    accusedDetails: 'Unknown person, approximately 5\'8" height, wearing dark clothes',
    incidentDescription: 'Complainant reports theft of two-wheeler from parking lot outside commercial complex on Road No. 12, Banjara Hills.',
    status: 'filed',
    createdAt: '2025-02-01T10:30:00',
    updatedAt: '2025-02-01T10:30:00',
  },
  {
    id: '2',
    firNumber: 'FIR/2025/HYD/002',
    dateFiled: '2025-02-03',
    sectionIpc: 'IPC 420 - Cheating',
    policeStation: 'Madhapur PS',
    complainantName: 'Priya Sharma',
    complainantDetails: 'Address: Flat 302, Cyber Towers Apartments, Madhapur. Phone: 8765432109',
    accusedDetails: 'Vikram Singh, known to complainant, previously worked together',
    incidentDescription: 'Online fraud case where accused cheated complainant of Rs. 2,50,000 through fake investment scheme promising high returns.',
    status: 'filed',
    createdAt: '2025-02-03T14:15:00',
    updatedAt: '2025-02-03T14:15:00',
  },
  {
    id: '3',
    firNumber: 'FIR/2025/HYD/003',
    dateFiled: '2025-02-05',
    sectionIpc: 'IPC 323 - Assault',
    policeStation: 'Kukatpally PS',
    complainantName: 'Srinivas Rao',
    complainantDetails: 'Address: House 12-3-456, KPHB Colony. Phone: 7654321098',
    accusedDetails: 'Neighbor - Mahesh Reddy, residing at House 12-3-457',
    incidentDescription: 'Physical altercation between neighbors over parking dispute resulting in minor injuries to complainant.',
    status: 'filed',
    createdAt: '2025-02-05T09:00:00',
    updatedAt: '2025-02-05T09:00:00',
  },

  // Ongoing FIRs
  {
    id: '4',
    firNumber: 'FIR/2025/HYD/004',
    dateFiled: '2025-01-15',
    sectionIpc: 'IPC 304A - Causing Death by Negligence',
    policeStation: 'Gachibowli PS',
    complainantName: 'Lakshmi Devi',
    complainantDetails: 'Address: Villa 23, Prestige Villas, Gachibowli. Phone: 9988776655',
    accusedDetails: 'Driver of vehicle TS09AB1234, identity under investigation',
    incidentDescription: 'Fatal road accident at ORR junction where speeding vehicle hit pedestrian crossing the road.',
    status: 'ongoing',
    createdAt: '2025-01-15T18:45:00',
    updatedAt: '2025-01-28T11:30:00',
  },
  {
    id: '5',
    firNumber: 'FIR/2025/HYD/005',
    dateFiled: '2025-01-20',
    sectionIpc: 'IPC 406 - Criminal Breach of Trust',
    policeStation: 'Secunderabad PS',
    complainantName: 'Mohammed Aziz',
    complainantDetails: 'Address: Shop 45, General Bazaar, Secunderabad. Phone: 8877665544',
    accusedDetails: 'Former employee - Raju Prasad, last known address: Malkajgiri',
    incidentDescription: 'Ex-employee absconded with shop inventory worth Rs. 5,00,000 and cash from safe.',
    status: 'ongoing',
    createdAt: '2025-01-20T08:30:00',
    updatedAt: '2025-02-02T16:00:00',
  },

  // Closed FIRs
  {
    id: '6',
    firNumber: 'FIR/2024/HYD/156',
    dateFiled: '2024-11-10',
    sectionIpc: 'IPC 454 - House Trespass',
    policeStation: 'Charminar PS',
    complainantName: 'Abdul Kareem',
    complainantDetails: 'Address: House 7-1-234, Charminar Area. Phone: 9876123456',
    accusedDetails: 'Three unknown persons, arrested and identified as local gang members',
    incidentDescription: 'Attempted burglary at complainant residence. Accused apprehended by neighbors and handed over to police.',
    status: 'closed',
    createdAt: '2024-11-10T22:00:00',
    updatedAt: '2024-12-15T10:00:00',
  },
  {
    id: '7',
    firNumber: 'FIR/2024/HYD/142',
    dateFiled: '2024-10-25',
    sectionIpc: 'IPC 498A - Cruelty by Husband',
    policeStation: 'Begumpet PS',
    complainantName: 'Sunitha Reddy',
    complainantDetails: 'Address: Flat 501, Lake View Apartments, Begumpet. Phone: 7788996655',
    accusedDetails: 'Husband - Venkat Reddy and in-laws',
    incidentDescription: 'Domestic violence case. Matter settled through mediation and mutual consent.',
    status: 'closed',
    createdAt: '2024-10-25T11:00:00',
    updatedAt: '2025-01-10T14:30:00',
  },
  {
    id: '8',
    firNumber: 'FIR/2024/HYD/130',
    dateFiled: '2024-09-18',
    sectionIpc: 'IPC 379 - Theft',
    policeStation: 'Ameerpet PS',
    complainantName: 'Tech Solutions Pvt Ltd',
    complainantDetails: 'Address: 3rd Floor, Tech Park, Ameerpet. Contact: HR Manager - 9123456780',
    accusedDetails: 'Former employee - Suresh Kumar, caught on CCTV',
    incidentDescription: 'Theft of computer equipment from office. Accused identified, arrested, and property recovered.',
    status: 'closed',
    createdAt: '2024-09-18T07:30:00',
    updatedAt: '2024-10-20T12:00:00',
  },
];

export const mockFirNotes: FirNote[] = [
  // Notes for FIR 4 (Ongoing)
  {
    id: 'n1',
    firId: '4',
    noteContent: 'Initial investigation started. Collected CCTV footage from nearby establishments.',
    officerName: 'SI Rajesh Kumar',
    createdAt: '2025-01-16T10:00:00',
  },
  {
    id: 'n2',
    firId: '4',
    noteContent: 'Vehicle registration traced. Owner identified as commercial fleet operator.',
    officerName: 'SI Rajesh Kumar',
    createdAt: '2025-01-20T15:30:00',
  },
  {
    id: 'n3',
    firId: '4',
    noteContent: 'Driver identified. Notice issued for appearance at police station.',
    officerName: 'Inspector M. Venkatesh',
    createdAt: '2025-01-28T11:30:00',
  },

  // Notes for FIR 5 (Ongoing)
  {
    id: 'n4',
    firId: '5',
    noteContent: 'Complaint registered. Inventory list collected from complainant.',
    officerName: 'SI Praveen Reddy',
    createdAt: '2025-01-20T09:00:00',
  },
  {
    id: 'n5',
    firId: '5',
    noteContent: 'Lookout notice issued at all railway stations and bus terminals.',
    officerName: 'SI Praveen Reddy',
    createdAt: '2025-01-25T14:00:00',
  },
  {
    id: 'n6',
    firId: '5',
    noteContent: 'Lead received from informant. Accused spotted in Karimnagar district.',
    officerName: 'Inspector D. Srinivas',
    createdAt: '2025-02-02T16:00:00',
  },

  // Notes for FIR 6 (Closed)
  {
    id: 'n7',
    firId: '6',
    noteContent: 'Accused arrested at scene by patrol team with assistance from local residents.',
    officerName: 'SI Imran Khan',
    createdAt: '2024-11-10T23:30:00',
  },
  {
    id: 'n8',
    firId: '6',
    noteContent: 'All three accused produced before magistrate. Judicial custody ordered.',
    officerName: 'SI Imran Khan',
    createdAt: '2024-11-11T11:00:00',
  },
  {
    id: 'n9',
    firId: '6',
    noteContent: 'Charge sheet filed. Case closed with successful prosecution.',
    officerName: 'Inspector K. Ramakrishna',
    createdAt: '2024-12-15T10:00:00',
  },
];

export const mockStatusHistory: FirStatusHistory[] = [
  // Status history for FIR 4
  { id: 'sh1', firId: '4', status: 'filed', changedAt: '2025-01-15T18:45:00', notes: 'FIR registered' },
  { id: 'sh2', firId: '4', status: 'ongoing', changedAt: '2025-01-16T10:00:00', notes: 'Investigation commenced' },

  // Status history for FIR 5
  { id: 'sh3', firId: '5', status: 'filed', changedAt: '2025-01-20T08:30:00', notes: 'FIR registered' },
  { id: 'sh4', firId: '5', status: 'ongoing', changedAt: '2025-01-21T09:00:00', notes: 'Active investigation' },

  // Status history for FIR 6
  { id: 'sh5', firId: '6', status: 'filed', changedAt: '2024-11-10T22:00:00', notes: 'FIR registered' },
  { id: 'sh6', firId: '6', status: 'ongoing', changedAt: '2024-11-11T08:00:00', notes: 'Investigation started' },
  { id: 'sh7', firId: '6', status: 'closed', changedAt: '2024-12-15T10:00:00', notes: 'Case closed - Charge sheet filed' },

  // Status history for FIR 7
  { id: 'sh8', firId: '7', status: 'filed', changedAt: '2024-10-25T11:00:00', notes: 'FIR registered' },
  { id: 'sh9', firId: '7', status: 'ongoing', changedAt: '2024-10-26T10:00:00', notes: 'Mediation process initiated' },
  { id: 'sh10', firId: '7', status: 'closed', changedAt: '2025-01-10T14:30:00', notes: 'Settled through mediation' },

  // Status history for FIR 8
  { id: 'sh11', firId: '8', status: 'filed', changedAt: '2024-09-18T07:30:00', notes: 'FIR registered' },
  { id: 'sh12', firId: '8', status: 'ongoing', changedAt: '2024-09-19T09:00:00', notes: 'CCTV analysis started' },
  { id: 'sh13', firId: '8', status: 'closed', changedAt: '2024-10-20T12:00:00', notes: 'Accused arrested, property recovered' },
];

export function getFirsByStatus(status: FirStatus): Fir[] {
  return mockFirs.filter(fir => fir.status === status);
}

export function getFirById(id: string): Fir | undefined {
  return mockFirs.find(fir => fir.id === id);
}

export function getFirNotes(firId: string): FirNote[] {
  return mockFirNotes.filter(note => note.firId === firId).sort((a, b) => 
    new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );
}

export function getFirStatusHistory(firId: string): FirStatusHistory[] {
  return mockStatusHistory.filter(history => history.firId === firId).sort((a, b) => 
    new Date(a.changedAt).getTime() - new Date(b.changedAt).getTime()
  );
}
