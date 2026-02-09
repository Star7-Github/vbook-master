
  /**
   * 应用沙箱目录枚举
   */
 declare enum SandboxURI {
    /**
     * 此目录用于存放小而重要的数据，目录长期有效，可以保存的文本文件
     */
    Files = "internal://files/",
    /**
     * 此目录用于存放大而不太重要的数据，目录长期有效
     */
    Cache = "internal://cache/",
    /**
     * 此目录用于存放缓存文件，适合保存不重要的缓存数据
     */
    Mass = "internal://mass/",
    /**
     * 此目录用于存放临时文件，应用退出后可能被清理
     */
    Tmp = "internal://tmp/",
  }

