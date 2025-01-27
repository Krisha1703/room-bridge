import Image from "next/image";

const DashboardPanel = ({ activeMenu, handleMenuClick, user }) => {
    return (
      <div className="w-1/4 bg-primary p-4">
        <div className="mb-8 text-center">
          
          <div className='relative ml-[8.5vw] rounded-full w-[75px] h-[75px] border-2 border-secondary border-solid'>
            <Image src={"/user.png"} alt='user' fill="contain"/>
          </div>

          <h2 className="text-2xl font-bold text-secondary mb-2">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-secondary text-lg">{user.email}</p>
        </div>
        <ul className="space-y-4">
          {['profile', 'preferences', 'rooms'].map(menu => (
            <li key={menu}>
              <button
                className={`w-full text-center text-md font-bold px-4 py-2 rounded-md ${
                  activeMenu === menu ? 'bg-secondary text-primary' : 'bg-primary text-secondary border-2 border-secondary border-solid'
                }`}
                onClick={() => handleMenuClick(menu)}
              >
                {menu.charAt(0).toUpperCase() + menu.slice(1)}
              </button>
            </li>
          ))}
          <li>
            <button className="w-full text-center text-md font-bold px-4 py-2 rounded-md bg-primary text-secondary border-2 border-secondary border-solid">
              Logout
            </button>
          </li>
        </ul>
      </div>
    );
  };
export default DashboardPanel;  