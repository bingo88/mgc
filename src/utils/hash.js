export const hash=(message) => {
    const crypto = require('crypto');
    // 创建一个哈希对象，指定使用 SHA-256 算法
    let hash = crypto.createHash('sha256');
    // 将密码转换为Buffer并更新到哈希对象
    hash.update(message);
    // 生成最终的哈希摘要（即加密后的密码）
    let hashedMessage = hash.digest('hex');
    return hashedMessage
}

