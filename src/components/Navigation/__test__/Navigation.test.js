import React from "react";
import { Navigation } from "../Navigation";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"
import { BrowserRouter } from 'react-router-dom';

test("Navbar renders the brand logo text", () => {
    render(
        <BrowserRouter>
            <Navigation />
        </BrowserRouter>
    );
    const navigationLogo = screen.getByRole("link", { name: 'My agenda' });
    expect(navigationLogo.textContent).toBe("My agenda");
})

test("Navbar renders the list", () => {
    render(
        <BrowserRouter>
            <Navigation />
        </BrowserRouter>
    );
    const navigationList = screen.getByRole("list");
    expect(navigationList).toBeInTheDocument();
})

test("Navbar renders the list items", () => {
    render(
        <BrowserRouter>
            <Navigation />
        </BrowserRouter>
    );
    const navigationListItem = screen.getAllByRole("listitem");
    expect(navigationListItem.length).toBe(2)
})


