# Our Sponsors - Coming Soon

<script setup>
import ResourceCard from './.vitepress/theme/components/ResourceCard.vue'
</script>

## Platinum Sponsors

<div class="sponsor-grid platinum">
  <ResourceCard
    title="Company A"
    description="Leading provider of enterprise testing solutions"
    link="https://company-a.com"
    icon="sponsors/company-a.svg"
    :tags="['Enterprise', 'Testing Solutions']"
  />
</div>

## Gold Sponsors

<div class="sponsor-grid gold">
  <ResourceCard
    title="Company B"
    description="Innovative test automation platform"
    link="https://company-b.com"
    icon="sponsors/company-b.svg"
    :tags="['Automation', 'Platform']"
  />
  <ResourceCard
    title="Company C"
    description="Performance testing solutions"
    link="https://company-c.com"
    icon="sponsors/company-c.svg"
    :tags="['Performance', 'Testing']"
  />
</div>

## Silver Sponsors

<div class="sponsor-grid silver">
  <ResourceCard
    title="Company D"
    description="Security testing tools"
    link="https://company-d.com"
    icon="sponsors/company-d.svg"
    :tags="['Security', 'Tools']"
  />
  <ResourceCard
    title="Company E"
    description="Mobile testing framework"
    link="https://company-e.com"
    icon="sponsors/company-e.svg"
    :tags="['Mobile', 'Framework']"
  />
  <ResourceCard
    title="Company F"
    description="API testing solutions"
    link="https://company-f.com"
    icon="sponsors/company-f.svg"
    :tags="['API', 'Testing']"
  />
</div>

<style>
.sponsor-grid {
  display: grid;
  gap: 2rem;
  margin: 2rem 0;
}

.platinum {
  grid-template-columns: 1fr;
}

.gold {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.silver {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>