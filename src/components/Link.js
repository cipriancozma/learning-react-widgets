import React from "react";

const Link = ({ className, href, children }) => {

   const onClick = (event) => {
        if(event.metaKey || event.ctrlKey) {
            return;
        }

       event.preventDefault();
       window.history.pushState({}, '', href);

       const navEvent = new PopStateEvent('popstate');
       window.dispatchEvent(navEvent);
   } 

  return (
    <div className={className} href={href} onClick={onClick}>
      {children }
    </div>
  );
};

export default Link;
