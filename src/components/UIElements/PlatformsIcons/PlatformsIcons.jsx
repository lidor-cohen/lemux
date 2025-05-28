import "./PlatformsIcons.css";

import XboxLogo from "../../../assets/icons/platforms/xbox.svg";
import PlaystationLogo from "../../../assets/icons/platforms/playstation.svg";
import PCLogo from "../../../assets/icons/platforms/windows.svg";
import LinuxLogo from "../../../assets/icons/platforms/linux.svg";
import MacOSLogo from "../../../assets/icons/platforms/macos.svg";

import { useMemo } from "react";

function PlatformsIcons({ platforms = [], ...props }) {
  const platformMap = {
    xbox: { logo: XboxLogo, name: "Xbox" },
    playstation: { logo: PlaystationLogo, name: "PlayStation" },
    pc: { logo: PCLogo, name: "PC" },
    macos: { logo: MacOSLogo, name: "macOS" },
    linux: { logo: LinuxLogo, name: "Linux" },
  };

  const uniquePlatforms = useMemo(() => {
    const found = new Set();
    const result = [];

    platforms.forEach((platform) => {
      const platformLower = platform.toLowerCase();

      for (const [key, value] of Object.entries(platformMap)) {
        if (platformLower.includes(key) && !found.has(key)) {
          found.add(key);
          result.push(value);
          break;
        }
      }
    });

    return result;
  }, [platforms]);

  return (
    <div className="platforms-icons" {...props}>
      {uniquePlatforms.map((platform) => (
        <img
          key={platform.name}
          src={platform.logo}
          alt={`${platform.name} logo`}
        />
      ))}
    </div>
  );
}

export default PlatformsIcons;
