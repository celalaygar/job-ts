import links from './links'; // Import links

export interface SidebarLink {
    href: string;       // Bağlantının URL'si veya rotası
    label: string;      // Bağlantı için görünen metin
    icon: string;       // İkonun adı (ör. Material UI, FontAwesome, vb.)
    loginRequired: boolean; // Bağlantının giriş gerektirip gerektirmediği
    activeKey: string;  // Aktif durumda kullanılan anahtar
}


const sidebarLinks: SidebarLink[] = [
    { href: links.home, label: 'Anasayfa', icon: 'Home', loginRequired: false, activeKey: "home" },
    { href: links.profile, label: 'Profilim', icon: 'Person', loginRequired: true, activeKey: "profile" },
    { href: links.users, label: 'Kullanıcılar', icon: 'People', loginRequired: true, activeKey: "users" },
    { href: links.tasks, label: 'Tasklar', icon: 'Assignment', loginRequired: true, activeKey: "tasks" },
    { href: links.sprints, label: 'Sprintler', icon: 'Timeline', loginRequired: true, activeKey: "sprints" },
    { href: links.backlog, label: 'Backlog', icon: 'ListAlt', loginRequired: true, activeKey: "backlog" },
];

export default sidebarLinks; 