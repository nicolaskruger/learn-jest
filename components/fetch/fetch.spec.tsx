import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Fetch } from "./fetch";
import axios from "axios";

jest.mock("axios");

const mockAxios = () => jest.mocked(axios);

afterEach(() => {
  jest.clearAllMocks();
});

test("loads and displays greeting", async () => {
  mockAxios().get.mockResolvedValue({ data: "hello there" });

  render(<Fetch />);

  fireEvent.click(screen.getByText("Load Greeting"));

  await screen.findByRole("heading");

  expect(screen.getByRole("heading")).toHaveTextContent("hello there");
  expect(screen.getByRole("button")).toBeDisabled();
});

test("handles server error", async () => {
  render(<Fetch />);

  mockAxios().get.mockRejectedValue(new Error());

  fireEvent.click(screen.getByText("Load Greeting"));

  await screen.findByRole("alert");

  expect(screen.getByRole("alert")).toHaveTextContent("Oops, failed to fetch!");
  expect(screen.getByRole("button")).not.toBeDisabled();
});
