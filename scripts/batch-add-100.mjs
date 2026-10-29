import { createClient } from '@sanity/client';
import { execSync } from 'child_process';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: 'n77v3b7z',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const CATS = {
  editor: 'mG7vmCjaB1vEw3gqUQCcFf',
  pair: 'mG7vmCjaB1vEw3gqUQCcS3',
  llm: 'YEARsfayN2fPM1bkBBDxCR',
  builder: 'mG7vmCjaB1vEw3gqUQCcct'
};

const newTools = [
  // AI Code Editors (补18个)
  { name: 'Zed', slug: 'zed', url: 'https://zed.dev', cat: CATS.editor, desc: 'Blazing fast AI-native code editor built for the terminal era.' },
  { name: 'Neovim + AI', slug: 'neovim-ai', url: 'https://neovim.io', cat: CATS.editor, desc: 'Extensible Vim-based editor with modern AI integrations.' },
  { name: 'JetBrains AI', slug: 'jetbrains-ai', url: 'https://www.jetbrains.com/ai/', cat: CATS.editor, desc: 'AI assistant built into all JetBrains IDEs.' },
  { name: 'VS Code Copilot', slug: 'vscode-copilot', url: 'https://code.visualstudio.com', cat: CATS.editor, desc: 'The classic IDE with native Copilot integration.' },
  { name: 'Emacs AI', slug: 'emacs-ai', url: 'https://www.gnu.org/software/emacs/', cat: CATS.editor, desc: 'The extensible text editor with AI plugins for LLM support.' },
  { name: 'CodeSandbox', slug: 'codesandbox', url: 'https://codesandbox.io', cat: CATS.editor, desc: 'Online cloud development environment with AI features.' },
  { name: 'StackBlitz', slug: 'stackblitz', url: 'https://stackblitz.com', cat: CATS.editor, desc: 'Instant cloud IDE that runs your dev environment in the browser.' },
  { name: 'Gitpod', slug: 'gitpod', url: 'https://www.gitpod.io', cat: CATS.editor, desc: 'Cloud-native development environments ready in seconds.' },
  { name: 'Codeanywhere', slug: 'codeanywhere', url: 'https://codeanywhere.com', cat: CATS.editor, desc: 'Cross-platform cloud IDE for collaborative development.' },
  { name: 'Glitch', slug: 'glitch', url: 'https://glitch.com', cat: CATS.editor, desc: 'Friendly community to build and deploy web apps instantly.' },
  { name: 'Codespaces', slug: 'github-codespaces', url: 'https://github.com/features/codespaces', cat: CATS.editor, desc: 'Instant cloud development environment on GitHub.' },
  { name: 'Theia', slug: 'theia-ide', url: 'https://theia-ide.org', cat: CATS.editor, desc: 'Extensible cloud and desktop IDE framework.' },
  { name: 'Eclipse Che', slug: 'eclipse-che', url: 'https://www.eclipse.org/che/', cat: CATS.editor, desc: 'Kubernetes-Native IDE for development teams.' },
  { name: 'AWS Cloud9', slug: 'aws-cloud9', url: 'https://aws.amazon.com/cloud9/', cat: CATS.editor, desc: 'Cloud IDE for writing, running, and debugging code with just a browser.' },
  { name: 'Kite', slug: 'kite-ai', url: 'https://www.kite.com', cat: CATS.editor, desc: 'AI-powered programming assistant with code completions.' },
  { name: 'Tabnine', slug: 'tabnine', url: 'https://www.tabnine.com', cat: CATS.editor, desc: 'AI code completion that works across all IDEs.' },
  { name: 'CodeGeeX', slug: 'codegeex', url: 'https://codegeex.cn', cat: CATS.editor, desc: 'Multilingual AI programming assistant for developers.' },
  { name: 'CodeLlama IDE', slug: 'codellama-ide', url: 'https://ai.meta.com/blog/code-llama/', cat: CATS.editor, desc: 'Meta\'s open code LLM with IDE integration.' },

  // AI Pair Programmers (补37个)
  { name: 'Amazon Q Developer', slug: 'amazon-q', url: 'https://aws.amazon.com/q/developer/', cat: CATS.pair, desc: 'AI coding assistant for AWS development tasks.' },
  { name: 'GitLab Duo', slug: 'gitlab-duo', url: 'https://about.gitlab.com/duo/', cat: CATS.pair, desc: 'AI-powered features integrated directly into GitLab.' },
  { name: 'Sourcegraph Cody', slug: 'sourcegraph-cody', url: 'https://sourcegraph.com/cody', cat: CATS.pair, desc: 'AI coding assistant that knows your entire codebase.' },
  { name: 'Mintlify', slug: 'mintlify', url: 'https://mintlify.com', cat: CATS.pair, desc: 'AI docs builder for developer teams.' },
  { name: 'Bito', slug: 'bito-ai', url: 'https://bito.ai', cat: CATS.pair, desc: 'AI pair programmer that integrates with your existing IDE.' },
  { name: 'Codeium', slug: 'codeium', url: 'https://codeium.com', cat: CATS.pair, desc: 'Free AI code completion and chat for developers.' },
  { name: 'Cody by Sourcegraph', slug: 'cody-sourcegraph', url: 'https://sourcegraph.com/cody', cat: CATS.pair, desc: 'Code-aware AI assistant with full codebase context.' },
  { name: 'Continue.dev', slug: 'continue-dev', url: 'https://www.continue.dev', cat: CATS.pair, desc: 'Open-source AI coding assistant for VS Code and JetBrains.' },
  { name: 'Roo Code', slug: 'roo-code', url: 'https://roocode.com', cat: CATS.pair, desc: 'Autonomous coding agent that lives in your editor.' },
  { name: 'Aider', slug: 'aider', url: 'https://aider.chat', cat: CATS.pair, desc: 'AI pair programming in your terminal with git integration.' },
  { name: 'OpenDevin', slug: 'opendevin', url: 'https://opendevin.ai', cat: CATS.pair, desc: 'Open-source autonomous AI software engineer.' },
  { name: 'Devin AI', slug: 'devin-ai', url: 'https://devin.ai', cat: CATS.pair, desc: 'The first AI software engineer that handles full tasks.' },
  { name: 'Sweep AI', slug: 'sweep-ai', url: 'https://sweep.dev', cat: CATS.pair, desc: 'AI junior developer that fixes GitHub issues.' },
  { name: 'CodeRabbit', slug: 'coderabbit', url: 'https://coderabbit.ai', cat: CATS.pair, desc: 'AI code review assistant for pull requests.' },
  { name: 'Graphite', slug: 'graphite', url: 'https://graphite.dev', cat: CATS.pair, desc: 'Stacked PRs and AI-powered code review workflow.' },
  { name: 'Ellipsis', slug: 'ellipsis', url: 'https://ellipsis.dev', cat: CATS.pair, desc: 'AI developer that tackles your backlog tickets.' },
  { name: 'Smol Developer', slug: 'smol-developer', url: 'https://smol.dev', cat: CATS.pair, desc: 'Tiny AI agent that builds small apps from prompts.' },
  { name: 'GPT Engineer', slug: 'gpt-engineer', url: 'https://gptengineer.app', cat: CATS.pair, desc: 'Specify what you want it to build, and it does it.' },
  { name: 'Devin', slug: 'devin-cognition', url: 'https://www.cognition.ai', cat: CATS.pair, desc: 'Autonomous AI engineer from Cognition Labs.' },
  { name: 'Cline', slug: 'cline', url: 'https://cline.bot', cat: CATS.pair, desc: 'Autonomous coding agent that runs in VS Code.' },
  { name: 'Windsurf Editor', slug: 'windsurf-editor', url: 'https://windsurf.com', cat: CATS.pair, desc: 'AI-native IDE that lets you flow with code.' },
  { name: 'Trae', slug: 'trae', url: 'https://trae.ai', cat: CATS.pair, desc: 'AI IDE from ByteDance built for pair programming.' },
  { name: 'Zencoder AI', slug: 'zencoder-ai', url: 'https://zen-code.ai', cat: CATS.pair, desc: 'AI code refactoring and optimization assistant.' },
  { name: 'Codeium Search', slug: 'codeium-search', url: 'https://codeium.com/search', cat: CATS.pair, desc: 'Code search across all your repositories.' },
  { name: 'DeepSeek Coder', slug: 'deepseek-coder', url: 'https://www.deepseek.com/coder', cat: CATS.pair, desc: 'Open-source code LLM optimized for coding tasks.' },
  { name: 'StarCoder', slug: 'starcoder', url: 'https://starcoder.com', cat: CATS.pair, desc: 'Open-code LLM trained on permissive code from Hugging Face.' },
  { name: 'CodeLlama', slug: 'codellama', url: 'https://ai.meta.com/blog/code-llama/', cat: CATS.pair, desc: 'Meta\'s open large language model for coding.' },
  { name: 'DeepSeek V2', slug: 'deepseek-v2', url: 'https://www.deepseek.com', cat: CATS.pair, desc: 'Open-source MoE LLM with strong coding performance.' },
  { name: 'Qwen Coder', slug: 'qwen-coder', url: 'https://qwenlm.github.io', cat: CATS.pair, desc: 'Tongyi Qianwen open code model series.' },
  { name: 'GLM-4 Code', slug: 'glm-4-code', url: 'https://chatglm.cn', cat: CATS.pair, desc: 'Zhipu AI open code LLM.' },
  { name: 'Codestral', slug: 'codestral', url: 'https://mistral.ai/codestral', cat: CATS.pair, desc: 'Mistral\'s open code LLM for generation and completion.' },
  { name: 'Magicoder', slug: 'magicoder', url: 'https://magicoder.dev', cat: CATS.pair, desc: 'Open-source code generation model from SEA-AI.' },
  { name: 'WizardCoder', slug: 'wizardcoder', url: 'https://wizardlm.github.io', cat: CATS.pair, desc: 'Evol-Instruct code model trained on 75k code problems.' },
  { name: 'OctoPack', slug: 'octopack', url: 'https://github.com/codeparrot/octopack', cat: CATS.pair, desc: 'Code training tool for language models.' },
  { name: 'PolyCoder', slug: 'polycoder', url: 'https://polycoder.dev', cat: CATS.pair, desc: 'Open-source code LLM trained on 20+ programming languages.' },
  { name: 'InCoder', slug: 'incoder', url: 'https://facebook.github.io/incoder/', cat: CATS.pair, desc: 'Meta\'s open code LLM for fill-in-the-middle tasks.' },
  { name: 'CodeGen', slug: 'codegen', url: 'https://www.salesforce.com/codegen', cat: CATS.pair, desc: 'Salesforce\'s open-source code generation model.' },

  // LLM APIs (补30个)
  { name: 'OpenAI GPT-4o', slug: 'openai-gpt4o', url: 'https://openai.com/api/', cat: CATS.llm, desc: 'OpenAI\'s flagship multimodal LLM for coding and reasoning.' },
  { name: 'Anthropic Claude 3.5 Sonnet', slug: 'claude-35-sonnet', url: 'https://www.anthropic.com/api', cat: CATS.llm, desc: 'Anthropic\'s best coding model with 200k context.' },
  { name: 'Google Gemini 1.5 Pro', slug: 'gemini-15-pro', url: 'https://ai.google.dev', cat: CATS.llm, desc: 'Google\'s multimodal LLM with 1M token context window.' },
  { name: 'Together AI', slug: 'together-ai', url: 'https://www.together.ai', cat: CATS.llm, desc: 'Inference platform for open-source LLMs at scale.' },
  { name: 'Fireworks AI', slug: 'fireworks-ai', url: 'https://fireworks.ai', cat: CATS.llm, desc: 'Serverless inference for fast LLM serving.' },
  { name: 'Anyscale Endpoints', slug: 'anyscale', url: 'https://www.anyscale.com/endpoints', cat: CATS.llm, desc: 'Production-grade API for open LLMs.' },
  { name: 'Groq Cloud', slug: 'groq-cloud', url: 'https://groq.com', cat: CATS.llm, desc: 'Ultra-fast LLM inference on custom hardware.' },
  { name: 'Mistral La Plateforme', slug: 'mistral-platform', url: 'https://mistral.ai/platform', cat: CATS.llm, desc: 'Mistral AI\'s hosting platform for their open models.' },
  { name: 'Cohere Command R', slug: 'cohere-command', url: 'https://cohere.com', cat: CATS.llm, desc: 'Enterprise-grade LLM for retrieval-augmented generation.' },
  { name: 'AI21 Labs Jurassic', slug: 'ai21-jurassic', url: 'https://www.ai21.com', cat: CATS.llm, desc: 'High-quality language models for enterprise use.' },
  { name: 'Hugging Face Inference', slug: 'hf-inference', url: 'https://huggingface.co/inference-api', cat: CATS.llm, desc: 'Serverless inference for 100k+ open models.' },
  { name: 'Replicate', slug: 'replicate', url: 'https://replicate.com', cat: CATS.llm, desc: 'Run open-source AI models with a simple API.' },
  { name: 'Modal', slug: 'modal', url: 'https://modal.com', cat: CATS.llm, desc: 'Serverless infrastructure for AI inference.' },
  { name: 'DeepInfra', slug: 'deepinfra', url: 'https://deepinfra.com', cat: CATS.llm, desc: 'Low-cost serverless inference for open LLMs.' },
  { name: 'Novita AI', slug: 'novita-ai', url: 'https://novita.ai', cat: CATS.llm, desc: 'Affordable LLM and image generation API.' },
  { name: 'Featherless AI', slug: 'featherless-ai', url: 'https://featherless.ai', cat: CATS.llm, desc: 'Fast inference for open-source Hugging Face models.' },
  { name: 'Lepton AI', slug: 'lepton-ai', url: 'https://www.lepton.ai', cat: CATS.llm, desc: 'Serverless inference platform for AI developers.' },
  { name: 'Predibase', slug: 'predibase', url: 'https://predibase.com', cat: CATS.llm, desc: 'Fine-tune and deploy custom LLMs in minutes.' },
  { name: 'Baseten', slug: 'baseten', url: 'https://www.baseten.co', cat: CATS.llm, desc: 'Production-grade model inference platform.' },
  { name: 'Banana Dev', slug: 'banana-dev', url: 'https://banana.dev', cat: CATS.llm, desc: 'Serverless GPU inference for ML models.' },
  { name: 'Beam', slug: 'beam-cloud', url: 'https://beam.cloud', cat: CATS.llm, desc: 'Serverless GPU infrastructure for AI inference.' },
  { name: 'RunPod', slug: 'runpod', url: 'https://www.runpod.io', cat: CATS.llm, desc: 'On-demand GPU cloud for AI inference and training.' },
  { name: 'Vast.ai', slug: 'vast-ai', url: 'https://vast.ai', cat: CATS.llm, desc: 'Cheapest GPU cloud for AI workloads.' },
  { name: 'Lambda Labs', slug: 'lambda-labs', url: 'https://lambdalabs.com', cat: CATS.llm, desc: 'GPU cloud built for machine learning.' },
  { name: 'CoreWeave', slug: 'coreweave', url: 'https://www.coreweave.com', cat: CATS.llm, desc: 'Specialized GPU cloud for AI training.' },
  { name: 'Together Compute', slug: 'together-compute', url: 'https://www.together.ai', cat: CATS.llm, desc: 'Dedicated GPU clusters for LLM training.' },
  { name: 'OctoAI', slug: 'octoai', url: 'https://octoai.ai', cat: CATS.llm, desc: 'High-performance inference for generative AI apps.' },
  { name: 'Nebius AI', slug: 'nebius', url: 'https://nebius.com/ai', cat: CATS.llm, desc: 'Cloud platform for AI inference and training.' },
  { name: 'Hyperbeam', slug: 'hyperbeam', url: 'https://hyperbeam.com', cat: CATS.llm, desc: 'Browser automation API for web agents.' },
  { name: 'Pydantic AI', slug: 'pydantic-ai', url: 'https://ai.pydantic.dev', cat: CATS.llm, desc: 'Build LLM agents with type safety.' },

  // AI App Builders (补9个)
  { name: 'Bolt.new', slug: 'bolt-new', url: 'https://bolt.new', cat: CATS.builder, desc: 'Build and deploy full-stack web apps from prompts instantly.' },
  { name: 'v0 by Vercel', slug: 'v0-vercel', url: 'https://v0.dev', cat: CATS.builder, desc: 'Generate UI components and full apps with prompts.' },
  { name: 'Replit AI', slug: 'replit-ai', url: 'https://replit.com', cat: CATS.builder, desc: 'Browser-based IDE with AI app generation and deployment.' },
  { name: 'Framer AI', slug: 'framer-ai', url: 'https://www.framer.com/ai/', cat: CATS.builder, desc: 'AI website builder that generates production-ready sites.' },
  { name: 'Webflow AI', slug: 'webflow-ai', url: 'https://webflow.com/ai', cat: CATS.builder, desc: 'Web design platform with AI-powered site generation.' },
  { name: 'Durable', slug: 'durable', url: 'https://durable.co', cat: CATS.builder, desc: 'AI website builder that creates a full business site in 30 seconds.' },
  { name: 'Unicorn Studio', slug: 'unicorn-studio', url: 'https://unicorn.studio', cat: CATS.builder, desc: 'AI no-code app builder for internal tools.' },
  { name: 'Stack AI', slug: 'stack-ai', url: 'https://stack-ai.com', cat: CATS.builder, desc: 'Build custom AI agents and internal tools without code.' },
  { name: 'Flowise', slug: 'flowise', url: 'https://flowiseai.com', cat: CATS.builder, desc: 'Drag-and-drop UI to build LLM workflows and agents.' },
];

async function getFaviconBuffer(url) {
  try {
    const favUrl = `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}&sz=128`;
    const out = execSync(`curl.exe -s -x http://127.0.0.1:7892 "${favUrl}"`, { maxBuffer: 1024*1024*5 });
    return out;
  } catch(e) { return null; }
}

let ok = 0, fail = 0;
for (const tool of newTools) {
  try {
    const existing = await client.fetch(`*[_type=="item" && slug.current == $slug][0]`, { slug: tool.slug });
    if (existing) { console.log(`跳过已存在: ${tool.name}`); continue; }

    const favBuffer = await getFaviconBuffer(tool.url);
    let iconRef = null;
    if (favBuffer && favBuffer.length > 100) {
      const asset = await client.assets.upload('image', favBuffer, { filename: `${tool.slug}-icon.png` });
      iconRef = { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
    }

    await client.create({
      _type: 'item',
      name: tool.name,
      slug: { _type: 'slug', current: tool.slug },
      link: tool.url,
      description: tool.desc,
      icon: iconRef,
      categories: [{ _type: 'reference', _ref: tool.cat }],
      publishDate: new Date().toISOString().split('T')[0],
    });
    console.log(`✅ 成功: ${tool.name}`);
    ok++;
  } catch(e) {
    console.log(`❌ 失败: ${tool.name} - ${e.message}`);
    fail++;
  }
}

console.log(`\n完成! 成功${ok}个, 失败${fail}个`);
const total = await client.fetch(`count(*[_type == "item"])`)
console.log('当前总工具数:', total);
