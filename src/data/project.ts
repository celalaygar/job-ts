// Define types for priority, status, type, and comments
export type Priority = 'Highest' | 'High' | 'Medium' | 'Low' | 'Lowest';
export type TaskStatus = 'To Do' | 'In Progress' | 'Done' | 'Test' | 'Dev' | 'Prod';
export type TaskType = 'Story' | 'Feature' | 'Bug';

export interface Project {
    id: string;
    name: string;
    description: string;
    projectCode: string;
    createdAt: string;
}

// Create an array of tasks
const projects: Project[] = [
    {
        id: 'PR-001',
        name: 'Chat GPT',
        description: 'ChatGPT is a sibling model to InstructGPT⁠, which is trained to follow an instruction in a prompt and provide a detailed response.',
        projectCode: 'PR-001',
        createdAt: '2023-01-02',
    },
    {
        id: 'PR-002',
        name: 'DeepSeeker',
        description: 'DeepSeek-V3 achieves a significant breakthrough in inference speed over previous models. It tops the leaderboard among open-source models.',
        projectCode: 'PR-002',
        createdAt: '2023-08-08',
    },
    {
        id: 'PR-003',
        name: 'Cursor',
        description: 'Build software faster · Frontier Intelligence. Powered by a mix of purpose-built and frontier models, Cursor is smart and fast. · Feels Familiar. Import all ...',
        projectCode: 'PR-003',
        createdAt: '2024-07-11',
    },
    {
        id: 'PR-004',
        name: 'Bolt.new',
        description: 'Prompt, run, edit, and deploy full-stack web apps.',
        projectCode: 'PR-004',
        createdAt: '2021-05-22',
    },
    {
        id: 'PR-005',
        name: 'Amazon',
        description: 'Amazon.com, Inc. Seattle, Washington merkezli, e-ticaret, bulut bilişim, dijital akış ve yapay zekâya odaklanan çok uluslu bir Amerikan teknoloji şirketidir. Google, Apple, Microsoft ve Facebook ile birlikte B.D. bilgi teknolojisi endüstrisindeki "En Büyük Beş Şirket" listesinde bulunmaktadır.',
        projectCode: 'PR-005',
        createdAt: '2023-11-02',
    },
];

export default projects; 