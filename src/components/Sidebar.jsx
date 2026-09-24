import { NavLink } from 'react-router-dom'
import { Avatar, Brand, BrandEyebrow, BrandMark, BrandTitle, Navigation, NavItem, ProfileCard, SidebarRoot } from '../styled/Sidebar.styles.js'

const icons = ['◫', '◎', '▣', '◌', '◴', '⚙']

export default function Sidebar({ items }) {
  return (
    <SidebarRoot component="aside">
      <Brand>
        <BrandMark>D</BrandMark>
        <div>
          <BrandEyebrow>Workspace</BrandEyebrow>
          <BrandTitle>Dashboard</BrandTitle>
        </div>
      </Brand>
      <Navigation component="nav">
        {items.map((item, index) => (
          <NavItem key={item.path} component={NavLink} to={item.path} end={item.path === '/'}>
            <span>{icons[index]}</span>
            {item.label}
          </NavItem>
        ))}
      </Navigation>
      <ProfileCard>
        <Avatar>AD</Avatar>
        <div><strong>Admin</strong><small>Workspace</small></div>
      </ProfileCard>
    </SidebarRoot>
  )
}
