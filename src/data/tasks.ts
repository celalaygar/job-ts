// Define types for priority, status, type, and comments
export type Priority = 'Highest' | 'High' | 'Medium' | 'Low' | 'Lowest';
export type TaskStatus = 'To Do' | 'In Progress' | 'Done' | 'Test' | 'Dev' | 'Prod';
export type TaskType = 'Story' | 'Feature' | 'Bug';

export interface Comment {
    comment: string;
    user: string;
    createdDate: string; // Date string
}

// Define the Task interface
export interface Task {
    taskNumber: string;
    title: string;
    description: string;
    assigned: string; // Assuming this is a string for the assignee's name
    createdAt: string; // Date string
    priority: Priority;
    status: TaskStatus;
    type: TaskType;
    comments: Comment[]; // Add comments array
}

// Create an array of tasks
const tasks: Task[] = [
    {
        taskNumber: 'task-001',
        title: 'Landing on Mars',
        description: 'Identify a safe landing spot. Kubernetes creates one PersistentVolume for each VolumeClaimTemplate definition on an statefulset. That makes each statefulset pod have its own storage that is not shared across the replicas. However, I would like to share the same volume across all the statefulset replicas. remote: Resolving deltas: 100% (3/3), completed with 3 local objects. Writing objects: 100% (7/7), 650 bytes | 325.00 KiB/s, done.',
        assigned: 'Elsa Hugo',
        createdAt: '2023-01-01',
        priority: 'High',
        status: 'In Progress',
        type: 'Story',
        comments: [
            { comment: 'Great idea!', user: 'Alice', createdDate: '2023-01-02' },
            { comment: 'Let’s discuss this further.', user: 'Bob', createdDate: '2023-01-03' },
        ],
    },
    {
        taskNumber: 'task-002',
        title: 'Build Mars Habitat',
        description: 'Use w-screen to make an element span the entire width of the viewport.',
        assigned: 'John Doe',
        createdAt: '2023-01-02',
        priority: 'Medium',
        status: 'In Progress',
        type: 'Feature',
        comments: [
            { comment: 'We need more resources for this.', user: 'Charlie', createdDate: '2023-01-04' },
        ],
    },
    {
        taskNumber: 'task-003',
        title: 'Launch Rocket',
        description: 'You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.',
        assigned: 'Jane Smith',
        createdAt: '2023-01-03',
        priority: 'Highest',
        status: 'Done',
        type: 'Bug',
        comments: [
            { comment: 'Everything looks good for launch.', user: 'Diana', createdDate: '2023-01-05' },
        ],
    },
    {
        taskNumber: 'task-004',
        title: 'Collect Soil Samples',
        description: 'You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use md:min-w-0 to apply the min-w-0 utility at only medium screen sizes and above.',
        assigned: 'Alice Johnson',
        createdAt: '2023-01-04',
        priority: 'Low',
        status: 'To Do',
        type: 'Story',
        comments: [
            { comment: 'Everything looks good for launch.', user: 'Diana', createdDate: '2023-01-05' },
            { comment: 'use variant modifiers to target.', user: 'Klara', createdDate: '2023-01-05' },
            { comment: 'You can also use variant use variant modifiers to target modifiers to target media queries like responsive breakpoints, Everything use variant modifiers to target looks good for launch.', user: 'Maria De Silva', createdDate: '2023-01-05' },
        ],
    },
    {
        taskNumber: 'task-005',
        title: 'Test Life Support Systems',
        description: 'Use these Tailwind CSS textarea components to add text input areas for things like user comments, feedback forms, and message boxes. These textarea components are designed and built by the Tailwind CSS team, and include a variety of different styles and layouts.',
        assigned: 'Bob Brown',
        createdAt: '2023-01-05',
        priority: 'Medium',
        status: 'In Progress',
        type: 'Feature',
        comments: [],
    },
    {
        taskNumber: 'task-006',
        title: 'Establish Communication',
        description: 'Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project..',
        assigned: 'Charlie Davis',
        createdAt: '2023-01-06',
        priority: 'Highest',
        status: 'To Do',
        type: 'Bug',
        comments: [],
    },
    {
        taskNumber: 'task-007',
        title: 'Conduct Experiments',
        description: 'You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use md:bg-origin-padding to apply the bg-origin-padding utility at only medium screen sizes and above..',
        assigned: 'Diana Evans',
        createdAt: '2023-01-07',
        priority: 'High',
        status: 'Test',
        type: 'Story',
        comments: [],
    },
    {
        taskNumber: 'task-008',
        title: 'Analyze Data',
        description: 'Analyze data collected from experiments.Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.',
        assigned: 'Eve Foster',
        createdAt: '2023-01-08',
        priority: 'Medium',
        status: 'Dev',
        type: 'Feature',
        comments: [],
    },
    {
        taskNumber: 'task-009',
        title: 'Prepare for Return',
        description: 'Get ready for the return journey to Earth.',
        assigned: 'Frank Green',
        createdAt: '2023-01-09',
        priority: 'Low',
        status: 'Prod',
        type: 'Bug',
        comments: [],
    },
    {
        taskNumber: 'task-010',
        title: 'Report Findings',
        description: 'Document and report findings from the mission.',
        assigned: 'Grace Hall',
        createdAt: '2023-01-10',
        priority: 'Highest',
        status: 'Done',
        type: 'Story',
        comments: [],
    },
];

export default tasks; 