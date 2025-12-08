import { CornerBorders } from '@/components/ui/corner-borders'
import { Globe, Users, Clock, Wifi } from '@/components/ui/icons'

export default function RemoteTeamSection() {
  return (
    <section className="pb-16 md:pb-24 bg-white dark:bg-transparent">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-4">
          <Globe className="w-4 h-4" />
          <span>Remote First</span>
        </div>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4">
          Distributed Team, 
          <span className="block text-gradient-primary">
            Global Excellence
          </span>
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
          Our talented team works remotely from across India, bringing diverse perspectives and 
          round-the-clock dedication to deliver exceptional results for our clients worldwide.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="relative border bg-card p-6 text-center">
          <CornerBorders />
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Users className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Collaborative Culture</h3>
          <p className="text-sm text-muted-foreground">
            Our remote-first approach fosters creativity and collaboration across time zones, 
            ensuring seamless project delivery.
          </p>
        </div>

        <div className="relative border bg-card p-6 text-center">
          <CornerBorders />
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Clock className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Extended Coverage</h3>
          <p className="text-sm text-muted-foreground">
            With team members across different regions, we provide extended support hours 
            and faster turnaround times.
          </p>
        </div>

        <div className="relative border bg-card p-6 text-center">
          <CornerBorders />
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Wifi className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Digital Native</h3>
          <p className="text-sm text-muted-foreground">
            Being remote-first has made us experts in digital collaboration tools and 
            efficient project management systems.
          </p>
        </div>
      </div>

      <div className="relative border bg-card p-8 text-center">
        <CornerBorders />
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Why Remote Works for Us
          </h3>
          <p className="text-muted-foreground text-lg mb-6">
            Our distributed team model allows us to tap into the best talent across India, 
            reduce overhead costs, and pass those savings to our clients while maintaining 
            the highest quality standards.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Benefits for Our Clients:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Cost-effective solutions</li>
                <li>• Access to diverse skill sets</li>
                <li>• Faster project delivery</li>
                <li>• Extended support hours</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Our Remote Advantages:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Top talent from across India</li>
                <li>• Reduced operational costs</li>
                <li>• Flexible working arrangements</li>
                <li>• Enhanced work-life balance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
