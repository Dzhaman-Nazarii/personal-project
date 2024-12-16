import MainIcon from "shared/assets/icons/main-page.svg";
import AboutIcon from "shared/assets/icons/about-page.svg";
import ProfileIcon from "shared/assets/icons/profile-page.svg";
import ArticlesIcon from "shared/assets/icons/articles-page.svg";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { createSelector } from "@reduxjs/toolkit";
import { SidebarItemType } from "../types/sidebar";
import { getUserAuthData } from "entities/User";

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                Icon: MainIcon,
                text: 'Головна',
				authOnly: false,
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: 'Про сайт',
				authOnly: false,
            },
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
                    Icon: ProfileIcon,
                    text: 'Профиль',
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    Icon: ArticlesIcon,
                    text: 'Статьи',
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
