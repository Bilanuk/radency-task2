import type { Meta, StoryObj } from "@storybook/react";
import Table from "../../components/table/Table";
import "./../../index.css";

import {
  sampleNotesData,
  sampleNotesColumns,
  sampleNotesActions,
  sampleSummaryData,
  sampleSummaryColumns,
} from "./sampleTableData";

const meta = {
  component: Table,
  title: "Components/Table",
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NotesData = {
  args: {
    data: sampleNotesData,
    columns: sampleNotesColumns,
    actions: sampleNotesActions,
  },
} satisfies Story;

export const NotesWithoutActions = {
  args: {
    data: sampleNotesData,
    columns: sampleNotesColumns,
    actions: [],
  },
} satisfies Story;

export const SummaryData = {
  args: {
    data: sampleSummaryData,
    columns: sampleSummaryColumns,
    actions: [],
  },
} satisfies Story;

export const Empty = {
  args: {
    data: [],
    columns: [],
    actions: [],
  },
} satisfies Story;
