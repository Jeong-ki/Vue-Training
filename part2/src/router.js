import { createWebHistory, createRouter } from "vue-router";
import HomePage from "./components/HomePage.vue";
import BlogList from "./components/BlogList.vue";
import DetailPage from "./components/DetailPage.vue";
import Author from "./components/AuthorIntro.vue";
import Comment from "./components/CommentTest.vue";

import blogData from './assets/blog';

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/list",
    component: {
      BlogList,
      Comment: Comment,
    },
    props: {
      blogData,
    }
  },
  {
    path: "/detail/:id",
    component: DetailPage,
    props: {
      blogData,
    },
    children: [
      {
        path: "author",
        component: Author,
      },
      {
        path: "comment",
        component: Comment,
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 