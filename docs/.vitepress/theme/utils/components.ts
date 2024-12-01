import type { App } from 'vue'
import SiteLogo from '../components/SiteLogo.vue'
import ChallengeList from '../components/challenges/ChallengeList.vue'
import SiteFooter from '../components/SiteFooter.vue'
import ChallengeDifficulty from '../components/ChallengeDifficulty.vue'
import TimeEstimate from '../components/TimeEstimate.vue'
import ResourceCard from '../components/ResourceCard.vue'
import ConsultationForm from '../components/ConsultationForm.vue'
import VideoEmbed from '../components/media/VideoEmbed.vue'
import SlideEmbed from '../components/media/SlideEmbed.vue'

export function registerComponents(app: App) {
  app.component('SiteLogo', SiteLogo)
  app.component('ChallengeList', ChallengeList)
  app.component('SiteFooter', SiteFooter)
  app.component('ChallengeDifficulty', ChallengeDifficulty)
  app.component('TimeEstimate', TimeEstimate)
  app.component('ResourceCard', ResourceCard)
  app.component('ConsultationForm', ConsultationForm)
  app.component('VideoEmbed', VideoEmbed)
  app.component('SlideEmbed', SlideEmbed)
}