import { menuItems } from "../constants/menu";
import { useSelector, useDispatch } from "react-redux";
import { setActiveMenuItem } from "../redux/slices/menuSlice";
import { AppDispatch, RootState } from "../redux/store";
import { useCallback } from "react";

const Menu: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const activeMenuItem = useSelector(
    (state: RootState) => state.menu.activeMenuItem
  );

  const isSidebarOpen = useSelector (
    (state: RootState) => state.sidebar.sidebarOpen
  )

  const handleMenuItemClick = useCallback(
    (link: string) => {
      dispatch(setActiveMenuItem(link));
    },
    [dispatch]
  );

  return (
    <div>
      {menuItems.map((section, index) => (
        <div key={index} className="mt-10">
          <h3 className={`${isSidebarOpen ? 'block' : 'hidden'}`}>{section.menu}</h3>
          <ul>
            {section.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className={`mt-4 p-1 hover:text-white hover:translate-x-1 transition duration-300 ${
                  activeMenuItem === item.link
                    ? "rounded-md bg-white/15"
                    : "text-white/70"
                }`}
              >
                <a
                  href={item.link}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuItemClick(item.link);
                  }}
                >
                  <div className={`flex flex-row gap-2 text-sm ${isSidebarOpen ? '' : ''}`}>
                    <item.icon className={`h-4  ${isSidebarOpen ? '' : 'm-auto'}`} />
                    <div className={` ${isSidebarOpen ? 'block' : 'hidden'}`}>
                      {item.name}
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;
