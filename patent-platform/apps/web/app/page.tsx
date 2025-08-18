export default function HomePage() {
  return (
    <div style={{ padding: '40px', fontFamily: 'system-ui, sans-serif', background: '#f8fafc' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ 
          background: '#fef3c7', 
          border: '2px solid #f59e0b',
          padding: '15px',
          marginBottom: '30px',
          borderRadius: '8px'
        }}>
          <strong>⚖️ Legal Notice:</strong> This platform provides automated assistance only. 
          Not legal advice. Consult a registered patent practitioner.
        </div>

        <h1 style={{ fontSize: '48px', marginBottom: '20px', color: '#1e293b' }}>
          🚀 Patent Filing Platform
        </h1>
        
        <p style={{ fontSize: '20px', color: '#64748b', marginBottom: '40px' }}>
          Automated patent application system with AI-powered drafting assistance
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          <div style={{ 
            background: 'white',
            border: '1px solid #e2e8f0',
            padding: '24px',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ fontSize: '24px', marginBottom: '10px', color: '#1e293b' }}>
              🤖 AI-Powered Drafting
            </h2>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>
              Generate patent claims and specifications using advanced AI trained on patent law, 
              MPEP guidelines, and thousands of granted patents
            </p>
          </div>

          <div style={{ 
            background: 'white',
            border: '1px solid #e2e8f0',
            padding: '24px',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ fontSize: '24px', marginBottom: '10px', color: '#1e293b' }}>
              📄 Form Generation
            </h2>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>
              Automatically create USPTO-compliant ADS, IDS, and other forms. 
              Export as PDF with all fields properly filled
            </p>
          </div>

          <div style={{ 
            background: 'white',
            border: '1px solid #e2e8f0',
            padding: '24px',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ fontSize: '24px', marginBottom: '10px', color: '#1e293b' }}>
              📅 Docket Management
            </h2>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>
              Track deadlines, manage prior art, and organize all matter documents 
              in one centralized platform
            </p>
          </div>

          <div style={{ 
            background: 'white',
            border: '1px solid #e2e8f0',
            padding: '24px',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ fontSize: '24px', marginBottom: '10px', color: '#1e293b' }}>
              🔍 Prior Art Search
            </h2>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>
              AI-powered prior art search with vector similarity matching. 
              Automatically extract references from uploaded PDFs
            </p>
          </div>

          <div style={{ 
            background: 'white',
            border: '1px solid #e2e8f0',
            padding: '24px',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ fontSize: '24px', marginBottom: '10px', color: '#1e293b' }}>
              ⏰ Deadline Tracking
            </h2>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>
              Never miss a deadline with automatic calculation of priority dates, 
              office action responses, and maintenance fees
            </p>
          </div>

          <div style={{ 
            background: 'white',
            border: '1px solid #e2e8f0',
            padding: '24px',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ fontSize: '24px', marginBottom: '10px', color: '#1e293b' }}>
              👥 Team Collaboration
            </h2>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>
              Work together with your team. Role-based access control ensures 
              the right people have the right permissions
            </p>
          </div>
        </div>

        <div style={{ 
          background: '#dbeafe',
          padding: '24px',
          borderRadius: '8px',
          marginBottom: '40px'
        }}>
          <h3 style={{ fontSize: '24px', marginBottom: '15px', color: '#1e40af' }}>
            📊 Platform Architecture
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
            <div style={{ background: 'white', padding: '12px', borderRadius: '6px' }}>
              <strong>Frontend:</strong> Next.js 14, TypeScript
            </div>
            <div style={{ background: 'white', padding: '12px', borderRadius: '6px' }}>
              <strong>Backend:</strong> NestJS, Prisma ORM
            </div>
            <div style={{ background: 'white', padding: '12px', borderRadius: '6px' }}>
              <strong>AI Agent:</strong> FastAPI, LangGraph
            </div>
            <div style={{ background: 'white', padding: '12px', borderRadius: '6px' }}>
              <strong>Database:</strong> PostgreSQL, pgvector
            </div>
            <div style={{ background: 'white', padding: '12px', borderRadius: '6px' }}>
              <strong>Storage:</strong> MinIO (S3-compatible)
            </div>
            <div style={{ background: 'white', padding: '12px', borderRadius: '6px' }}>
              <strong>Queue:</strong> Redis, BullMQ
            </div>
          </div>
        </div>

        <div style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '30px',
          borderRadius: '8px',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h3 style={{ fontSize: '28px', marginBottom: '15px' }}>
            🎯 Demo Deployment
          </h3>
          <p style={{ fontSize: '18px', marginBottom: '20px' }}>
            This is a demonstration deployment showcasing the platform interface.
          </p>
          <p style={{ opacity: '0.9' }}>
            Full functionality includes: Real-time AI processing • Database persistence • 
            File uploads • PDF generation • Email notifications • User authentication • 
            Stripe billing • Team collaboration
          </p>
        </div>

        <div style={{ 
          background: 'white',
          border: '2px solid #e2e8f0',
          padding: '24px',
          borderRadius: '8px',
          marginBottom: '40px'
        }}>
          <h3 style={{ fontSize: '24px', marginBottom: '15px', color: '#1e293b' }}>
            🚀 Quick Start Guide
          </h3>
          <ol style={{ lineHeight: '2', color: '#475569' }}>
            <li>1. Clone the repository from GitHub</li>
            <li>2. Install Docker Desktop</li>
            <li>3. Run <code style={{ background: '#f1f5f9', padding: '2px 6px', borderRadius: '3px' }}>./start.sh</code></li>
            <li>4. Access the platform at <code style={{ background: '#f1f5f9', padding: '2px 6px', borderRadius: '3px' }}>http://localhost:3000</code></li>
            <li>5. Login with demo credentials</li>
          </ol>
        </div>

        <div style={{ 
          textAlign: 'center', 
          padding: '20px',
          borderTop: '1px solid #e2e8f0',
          color: '#64748b' 
        }}>
          <p>© 2024 Patent Filing Platform - Educational and Development Use Only</p>
          <p style={{ marginTop: '10px' }}>
            <a href="https://github.com/alovladi007/Patent-Filing-Platform-Builder" 
               style={{ color: '#667eea', textDecoration: 'none' }}>
              View on GitHub →
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}