import SteamLogo from "../assets/logos/steam.svg";
import AppStoreLogo from "../assets/logos/appstore.svg";
import EpicGamesLogo from "../assets/logos/epicgames.svg";
import GOGLogo from "../assets/logos/gog.svg";
import GooglePlayLogo from "../assets/logos/googleplay.svg";
import ItchIoLogo from "../assets/logos/itchio.svg";
import NintendoLogo from "../assets/logos/nintendo.svg";
import PSNLogo from "../assets/logos/psn.svg";
import XboxLogo from "../assets/logos/xbox.svg";
import Xbox360Logo from "../assets/logos/xbox360.svg";

export const stores = {
  1: {
    name: "Steam",
    domain: "store.steampowered.com",
    slug: "steam",
    logo: SteamLogo,
  },
  2: {
    name: "Xbox Store",
    domain: "microsoft.com",
    slug: "xbox-store",
    logo: XboxLogo,
  },
  3: {
    name: "PlayStation Store",
    domain: "store.playstation.com",
    slug: "playstation-store",
    logo: PSNLogo,
  },
  4: {
    name: "App Store",
    domain: "apps.apple.com",
    slug: "apple-appstore",
    logo: AppStoreLogo,
  },
  5: {
    name: "GOG",
    domain: "gog.com",
    slug: "gog",
    logo: GOGLogo,
  },
  6: {
    name: "Nintendo Store",
    domain: "nintendo.com",
    slug: "nintendo",
    logo: NintendoLogo,
  },
  7: {
    name: "Xbox 360 Store",
    domain: "marketplace.xbox.com",
    slug: "xbox360",
    logo: Xbox360Logo,
  },
  8: {
    name: "Google Play",
    domain: "play.google.com",
    slug: "google-play",
    logo: GooglePlayLogo,
  },
  9: {
    name: "itch.io",
    domain: "itch.io",
    slug: "itch",
    logo: ItchIoLogo,
  },
  11: {
    name: "Epic Games",
    domain: "epicgames.com",
    slug: "epic-games",
    logo: EpicGamesLogo,
  },
};
