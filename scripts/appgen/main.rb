libs = %w( bundler/inline pathname fileutils erb )
libs.each { |f| require f }

gemfile do
  gem 'pry'
  gem 'playwright-cli', path: '/Users/mikegregory/dev-projects/playwright-cli'
end

class AppGen < Playwright::Cli::Lib::Base
  root :appgen
  version '0.0.1'
  arguments :component_type, :name

  COMPONENT_TYPE = :component
  VALID_COMPONENT_TYPES = [COMPONENT_TYPE]

  def self.template_dir
    Pathname.new(File.join(File.expand_path('..', __FILE__), 'templates'))
  end

  def run
    case args.component_type.to_sym
    when COMPONENT_TYPE
      build_component
    else
      finish :failure, message: "Invalid component type - #{args.component_type}"
    end
    finish :success
  end

  def build_component
    files = Dir[self.class.template_dir.join('component', '*.erb')]
    target_dir = Pathname.new(Dir.pwd).join('workout-ui', 'src', 'components', args.name)

    FileUtils.mkdir_p target_dir
    files.each do |file_path|
      output_file = target_dir.join file_path.split('/').last.gsub('NAME', args.name).gsub('.erb', '')
      template = File.read(file_path)
      renderer = ERB.new(template)
      file_contents = renderer.result(binding)
      File.open(output_file, 'w+') { |f| f.write file_contents }
    end
    io.say "Component: #{args.name} created!"
  end

end