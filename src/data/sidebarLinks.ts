import links from './links'; // Import links

const sidebarLinks = [
    { href: links.home, label: 'Anasayfa', icon: 'Home', loginRequired: false },
    { href: links.profile, label: 'Profilim', icon: 'Person', loginRequired: true },
    { href: links.users, label: 'Kullanıcılar', icon: 'People', loginRequired: true },
    { href: links.tasks, label: 'Tasklar', icon: 'Assignment', loginRequired: true },
    { href: links.sprints, label: 'Sprintler', icon: 'Timeline', loginRequired: true },
    { href: links.backlog, label: 'Backlog', icon: 'ListAlt', loginRequired: true },
];

export default sidebarLinks; 