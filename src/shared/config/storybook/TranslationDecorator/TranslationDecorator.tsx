import React, { Suspense } from "react";
import { StoryFn } from "@storybook/react";
import { I18nextProvider } from "react-i18next";
import i18n from "shared/config/i18n/i18n";

export const TranslationDecorator = (StoryComponent: StoryFn) => (
	<I18nextProvider i18n={i18n}>
		<Suspense fallback="Loading...">
			<StoryComponent />
		</Suspense>
	</I18nextProvider>
);
