import { createRouter, createWebHistory } from 'vue-router';
import TheLogin from '@/components/auth/TheLogin.vue';
import AuthView from '@/views/AuthView.vue';
import TheSignup from '@/components/auth/TheSignup.vue';
import { useUserStore } from '@/stores/user';
import ListsView from '@/views/ListsView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import TodolistView from '@/views/TodolistView.vue';
import TodoitemView from '@/views/TodoitemView.vue';
import ProfileView from '@/views/ProfileView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'auth',
      path: '/',
      component: AuthView,
      children: [
        {
          name: 'login',
          path: 'login',
          component: TheLogin,
        },
        {
          name: 'signup',
          path: 'signup',
          component: TheSignup,
        },
      ],
      redirect: { name: 'login' },
      beforeEnter: async (_, from) => {
        if (from.matched.some((r) => r.name === 'workspace')) {
          return;
        }

        const userStore = useUserStore();

        if (userStore.authenticated || (await userStore.refresh())) {
          return { name: 'lists' };
        }
      },
    },
    {
      name: 'workspace',
      path: '/',
      children: [
        {
          name: 'lists',
          path: 'lists',
          component: ListsView,
        },
        {
          name: 'list',
          path: 'lists/:listId',
          component: TodolistView,
          props: (route) => ({ listId: route.params.listId }),
        },
        {
          name: 'item',
          path: 'lists/:listId/items/:itemId',
          component: TodoitemView,
          props: (route) => ({ itemId: route.params.itemId }),
        },
        {
          name: 'profile',
          path: 'profile',
          component: ProfileView,
        },
      ],
      redirect: { name: 'lists' },
      beforeEnter: async () => {
        const userStore = useUserStore();

        if (userStore.authenticated || (await userStore.refresh())) {
          return;
        }

        return { name: 'login' };
      },
    },
    {
      name: 'not-found',
      path: '/:pathMatch(.*)*',
      component: NotFoundView,
    },
  ],
});

export default router;
