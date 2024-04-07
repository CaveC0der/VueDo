import { createRouter, createWebHistory } from 'vue-router';
import TheLogin from '@/components/auth/TheLogin.vue';
import AuthView from '@/views/AuthView.vue';
import TheSignup from '@/components/auth/TheSignup.vue';
import WorkspaceView from '@/views/WorkspaceView.vue';
import TheListsTopBar from '@/components/workspace/TheListsTopBar.vue';
import TheLists from '@/components/workspace/TheLists.vue';
import TheListsBottomBar from '@/components/workspace/TheListsBottomBar.vue';
import TheTodolist from '@/components/todolist/TheTodolist.vue';
import TheTodolistTopBar from '@/components/todolist/TheTodolistTopBar.vue';
import TheTodolistBottomBar from '@/components/todolist/TheTodolistBottomBar.vue';
import TheTodoitem from '@/components/todoitem/TheTodoitem.vue';
import TheTodoitemTopBar from '@/components/todoitem/TheTodoitemTopBar.vue';
import TheProfileTopBar from '@/components/profile/TheProfileTopBar.vue';
import TheProfile from '@/components/profile/TheProfile.vue';
import TheNotFoundTopBar from '@/components/notfound/TheNotFoundTopBar.vue';
import TheNotFound from '@/components/notfound/TheNotFound.vue';
import { useUserStore } from '@/stores/user';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'auth',
      path: '/auth',
      component: AuthView,
      children: [
        {
          name: 'login',
          path: 'login',
          alias: '/login',
          component: TheLogin,
        },
        {
          name: 'signup',
          path: 'signup',
          alias: '/signup',
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
      path: '/workspace',
      alias: '/',
      component: WorkspaceView,
      children: [
        {
          name: 'lists',
          path: 'lists',
          components: {
            topBar: TheListsTopBar,
            default: TheLists,
            bottomBar: TheListsBottomBar,
          },
        },
        {
          name: 'list',
          path: 'lists/:listId',
          components: {
            topBar: TheTodolistTopBar,
            default: TheTodolist,
            bottomBar: TheTodolistBottomBar,
          },
          props: {
            topBar: (route) => ({ listId: route.params.listId }),
          },
        },
        {
          name: 'item',
          path: 'lists/:listId/items/:itemId',
          components: {
            topBar: TheTodoitemTopBar,
            default: TheTodoitem,
          },
          props: {
            topBar: (route) => ({ itemId: route.params.itemId }),
            default: (route) => ({ itemId: route.params.itemId }),
          },
        },
        {
          name: 'profile',
          path: 'profile',
          components: {
            topBar: TheProfileTopBar,
            default: TheProfile,
          },
        },
      ],
      redirect: { name: 'lists' },
      beforeEnter: async (_, from) => {
        if (from.matched.some((r) => r.name === 'auth')) {
          return;
        }

        const userStore = useUserStore();

        if (!(userStore.authenticated || (await userStore.refresh()))) {
          return { name: 'login' };
        }
      },
    },
    {
      path: '/:pathMatch(.*)*',
      component: WorkspaceView,
      children: [
        {
          name: 'not-found',
          path: '',
          components: {
            topBar: TheNotFoundTopBar,
            default: TheNotFound,
          },
        },
      ],
    },
  ],
});

export default router;
