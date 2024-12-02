import { fireEvent, screen } from "@testing-library/react";
import React from "react";
import { Sidebar } from "./Sidebar";
import { ComponentRender } from "shared/lib/tests/componentRender/ComponentRender";

describe("Sidebar", () => {
    test("renders Sidebar correctly", () => {
        ComponentRender(<Sidebar/>)
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    test("toggle button", () => {
        ComponentRender(<Sidebar/>)
        const toggleBtn = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed")
    });
});