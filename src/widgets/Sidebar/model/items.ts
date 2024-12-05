import React from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/icons/main-page.svg";
import AboutIcon from "shared/assets/icons/about-page.svg";
import ProfileIcon from "shared/assets/icons/profile-page.svg";

export interface SidebarItemType {
	path: string;
	text: string;
	Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemList: SidebarItemType[] = [
	{
		path: RoutePath.main,
		text: "Main",
		Icon: MainIcon,
	},
	{
		path: RoutePath.about,
		text: "About",
		Icon: AboutIcon,
	},
	{
		path: RoutePath.profile,
		text: "Profile",
		Icon: ProfileIcon,
	},
];
