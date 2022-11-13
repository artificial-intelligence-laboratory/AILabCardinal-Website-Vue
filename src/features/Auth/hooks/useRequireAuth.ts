import useAuthStore from '../stores/useAuthStore'

const HOME_PAGE_NAME = 'home'

const useRequireAuth = () => {
  const router = useRouter()

  const auth = useAuthStore()

  onMounted(() => {
    router.beforeEach(async to => {
      if (
        // 检查用户是否已登录
        !auth.isLoggedIn &&
        // ❗️ 避免无限重定向
        to.name !== HOME_PAGE_NAME
      ) {
        // 将用户重定向到主页面
        return { name: HOME_PAGE_NAME }
      }
    })
  })
}

export default useRequireAuth
