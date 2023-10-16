import React from "react";
import { render, screen } from "@testing-library/react";
import GroupTasks from "../components/GroupTasks";

const sampleData = [
    {
        groupId: 1,
        name: "Group 1",
        tasks: [
            { id: "1", description: "Task 1", value: 10, percent: 20, checked: true },
            { id: "2", description: "Task 2", value: 20, percent: 40, checked: false },
        ],
    },
];

test("renders GroupTasks component", () => {
    render(<GroupTasks data={sampleData} />);
    const groupTasksElement = screen.getByText("Lodgify Group Tasks");
    expect(groupTasksElement).toBeInTheDocument();
});

