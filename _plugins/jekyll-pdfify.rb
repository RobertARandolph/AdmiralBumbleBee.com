require 'fileutils'
require 'open3'

# Generates a list of files (with pdf: true and a reader layout) to be converted.
# ./generate-pdfs starts a server and uses wkhtmltopdf to convert the listed files.

Jekyll::Hooks.register :posts, :post_write do |post|
  if post.data["pdf"]
    if post.data["layout"] == "reader" and post.data["pdf"] == true
      filename = "_site" + post.url
      dirname = File.dirname(filename)
      unless File.directory?(dirname)
        FileUtils.mkdir_p(dirname)
      end
      open("_site/pdf.log", "a") do |f|
        f.puts filename.gsub(/\_site\//, "")
      end
      # --- For when there's a working PDF command ---
      # open(filename, 'w') do |f|
      #     pdf_name = File.dirname(filename) + "/" + File.basename(filename, ".*") + ".pdf"
      #     pdf_name = pdf_name.gsub(/\_site/, "")
      #     # paths starting with / are absolute. Must have separate PDF script that starts server
      #     # and generates from a list of paths
      #     out, err, st = Open3.capture3("wkhtmltopdf", "--enable-local-file-access", filename, pdf_name)
      #     open("_site/pdf.log", "a") do |f|
      #       f.puts filename
      #     end
      # end
    end
  end
end