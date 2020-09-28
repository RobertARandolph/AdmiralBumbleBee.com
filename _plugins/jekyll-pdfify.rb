require 'fileutils'

Jekyll::Hooks.register :site, :post_read do |site|
  site.posts.each { |post| 
    new_post = Marshal.load(Marshal.dump(post))
    p new_post
  }
    
  # site.posts << new_post }

  # filename = "_site/reader" + post.url

  # dirname = File.dirname(filename)
  # unless File.directory?(dirname)
  #   FileUtils.mkdir_p(dirname)
  # end
  # File.open(filename, "w") { |f| f.write post }
end