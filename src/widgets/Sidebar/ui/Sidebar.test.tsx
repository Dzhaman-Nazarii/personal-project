import { fireEvent, screen } from "@testing-library/react";
import React, { Suspense } from "react";
import { Sidebar } from "./Sidebar";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe("Sidebar", () => {
    test("renders Sidebar correctly", () => {
        renderWithTranslation(<Suspense fallback="Loading..."><Sidebar/></Suspense>);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    test("toggle button", () => {
        renderWithTranslation(<Suspense fallback="Loading..."><Sidebar/></Suspense>);
        const toggleBtn = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed")
    });
});