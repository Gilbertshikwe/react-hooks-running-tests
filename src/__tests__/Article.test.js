import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";

import Article from "../components/Article";

test("displays the text 'please pass this test'", async () => {
  render (<Article>'please pass this test'</Article>);

  await waitFor(() => {
    expect(screen.queryByText("please pass this test")).toBeInTheDocument();
  });
});

