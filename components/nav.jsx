
const Nav = ({ containerStyles, linkStyles, links }) => {
   return (
      <>
         <div className={`${containerStyles}`}>
            {links.map((link, index) => {
               return (
                  <li
                     key={index}
                     offset={link.offset}
                     duration={500}
                     className={`${linkStyles}`}
                  >
                     <a href={link.url}>{link.name}</a>
                  </li>
               )
            })}
         </div>
      </>
   );
};

export default Nav;