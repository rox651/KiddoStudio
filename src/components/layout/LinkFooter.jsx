import { NavLink } from "react-router-dom";

export const LinkFooter = ({ link }) => {
   const { name, redir } = link;

   return (
      <NavLink
         className={({ isActive }) => (isActive ? `text-[#DF9EF4] font-[Fixture] text-7xl` : "text-white hover:text-[#DF9EF4] transition-colors font-[Fixture] text-7xl")}
         to={redir}
      >{name}</NavLink>
   );
};
