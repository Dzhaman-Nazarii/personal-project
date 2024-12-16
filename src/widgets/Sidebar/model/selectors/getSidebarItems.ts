import MainIcon from "shared/assets/icons/main-page.svg";
import AboutIcon from "shared/assets/icons/about-page.svg";
import ProfileIcon from "shared/assets/icons/profile-page.svg";
import ArticlesIcon from "shared/assets/icons/articles-page.svg";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { createSelector } from "@reduxjs/toolkit";
import { SidebarItemType } from "../types/sidebar";
import { getUserAuthData } from "entities/User";
import { useTranslation } from "react-i18next";

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const {t} = useTranslation();
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                Icon: MainIcon,
                text: "Main",
				authOnly: false,
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: "About",
				authOnly: false,
            },
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
                    Icon: ProfileIcon,
                    text: "Profile",
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    Icon: ArticlesIcon,
                    text: "Articles",
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
