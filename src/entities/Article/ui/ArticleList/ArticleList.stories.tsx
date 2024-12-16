import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { ArticleList } from './ArticleList';
import { Article, ArticleView } from 'entities/Article/model/types/articles';

export default {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticleList>;

const Template: StoryFn<typeof ArticleList> = (args) => <ArticleList {...args} />;

const article = {
    id: '1',
    title: 'The Rise of JavaScript Frameworks',
    subtitle: '"What changed in JS in 2024?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '16.12.2024',
    user: {
        id: '1',
        username: 'Nazik',
        avatar: 'https://img.freepik.com/premium-vector/cute-boy-smiling-cartoon-kawaii-boy-illustration-boy-avatar-happy-kid_1001605-3449.jpg?w=826',
    },
    type: [
        'IT',
        'SCIENCE',
        'POLITICS',
        'ECONOMICS',
    ],
    blocks: [
        {
          "id": "1",
          "type": "TEXT",
          "title": "Introduction",
          "paragraphs": [
            "The traditional 'Hello, world!' program is very simple. It outputs the phrase 'Hello, world!' or a similar message using a specific programming language.",
            "JavaScript is a versatile language that can run in various environments. Typically, it is used in browsers and on server-side platforms like Node.js. If you're new to JavaScript and reading this in a browser, you're just moments away from writing your first JS program.",
            "There are other ways to execute JavaScript code in a browser. Generally, JS programs are loaded to enhance web pages. They are often included as separate .js files, but you can also embed the code directly into the webpage using the <script> tag. When the browser encounters such a tag, it executes the code inside. Detailed explanations about the <script> tag can be found on w3schools.com. Let's look at an example of JavaScript interacting with a webpage."
          ]
        },
        {
          "id": "2",
          "type": "CODE",
          "code": "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"message\"></p>\n\n    <script>\n      document.getElementById(\"message\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;"
        },
        {
          "id": "3",
          "type": "IMAGE",
          "src": "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
          "title": "Figure 1 - Screenshot of a website"
        }
      ],
} as Article;

export const LoadingBig = Template.bind({});
LoadingBig.args = {
    articles: [],
    isLoading: true,
    view: ArticleView.BIG,
};

export const LoadingSmall = Template.bind({});
LoadingSmall.args = {
    articles: [],
    isLoading: true,
    view: ArticleView.SMALL,
};

export const ListSmall = Template.bind({});
ListSmall.args = {
    articles: new Array(9)
        .fill(0)
        .map((item, index) => ({
            ...article,
            id: String(index),
        })),
    isLoading: false,
    view: ArticleView.SMALL,
};

export const ListBig = Template.bind({});
ListBig.args = {
    articles: new Array(9)
        .fill(0)
        .map((item, index) => ({
            ...article,
            id: String(index),
        })),
    isLoading: false,
    view: ArticleView.BIG,
};
