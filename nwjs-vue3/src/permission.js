import router from './router';

/**
 * 路由守卫
 */
router.beforeEach(async (to, from, next) => {
    // 在此处添加权限控制
    next();
});
