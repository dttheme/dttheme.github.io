import { Card, ExternalLink, SectionHeader } from "../components";
import React from "react";

const PeerSupport = () => {
  return (
    <div>
      <Card>
        <SectionHeader id="welcome" text="Welcome" />
        <p>
          Hi! I'm Dyanna (they/she). I’m a Certified Peer Specialist (CPS) in
          the state of Georgia and a queer, neurodivergent adult with lived
          experience of trauma and recovery. I offer 1:1 peer support sessions
          and open office hours rooted in mutual respect, lived truth, and
          community care.
        </p>
        <p>
          Peer support is not therapy. It’s a relationship between equals. I
          don’t diagnose or do the work for you. Instead, I show up as myself:
          someone who’s walked a winding mental health recovery path and is
          still walking that path. I’m here to witness and support you as you
          navigate your own way. I can offer perspective, as well as referral to
          verified resources.
        </p>
        <p>
          This work is offered on a NOTAFLOF basis — no one turned away for lack
          of funds. Sessions are available at no cost, with sliding-scale
          donations appreciated if you’re able to contribute.
        </p>
      </Card>
      <Card>
        <SectionHeader id="about-me" text="About Me" />
        <p>
          <b>Let's make sure we're a good fit!</b> Ask me about any of the
          identities, philosophies, experiences or practices listed here.
        </p>
        <small>
          <p>
            <b>Trigger warning:</b> I mention some hard things. If you don't
            feel comfortable, skip it this section! We can still talk.
          </p>
        </small>
        <SectionHeader id="identities" level={4} text="Identities" />
        <p>
          35 years old, assigned female at birth (AFAB), artist, engineer,
          gamer, Libra, naturephile, nerd,{" "}
          <ExternalLink href="https://en.wikipedia.org/wiki/Neurodiversity">
            neurodivergent
          </ExternalLink>
          ,{" "}
          <ExternalLink href="https://en.wikipedia.org/wiki/Non-binary_gender">
            trans non-binary
          </ExternalLink>
          ,{" "}
          <ExternalLink href="https://en.wikipedia.org/wiki/Queer">
            queer
          </ExternalLink>
          , white,{" "}
          <ExternalLink href="https://en.wikipedia.org/wiki/Witchcraft">
            witch
          </ExternalLink>
          , raised Catholic, with ancestors primarily from Ireland and England,
          living on Muscogee land in southwest Atlanta
        </p>
        <SectionHeader id="philosophies" level={4} text="Philosophies" />
        <p>
          <ExternalLink href="https://en.wikipedia.org/wiki/Abolitionism">
            abolition
          </ExternalLink>
          ,{" "}
          <ExternalLink href="https://en.wikipedia.org/wiki/Animism">
            animism
          </ExternalLink>
          ,{" "}
          <ExternalLink href="https://en.wikipedia.org/wiki/Critique_of_capitalism">
            anti-capitalism
          </ExternalLink>
          , body positivity,{" "}
          <ExternalLink href="https://en.wikipedia.org/wiki/Empiricism">
            empiricism
          </ExternalLink>
          ,{" "}
          <ExternalLink href="https://en.wikipedia.org/wiki/Harm_reduction">
            harm reduction
          </ExternalLink>
          , land back,{" "}
          <ExternalLink href="https://en.wikipedia.org/wiki/Mutual_aid">
            mutual aid
          </ExternalLink>
          , playfulness,{" "}
          <ExternalLink href="https://en.wikipedia.org/wiki/Pragmatism">
            pragmatism
          </ExternalLink>
          ,{" "}
          <ExternalLink href="https://en.wikipedia.org/wiki/Distress_tolerance#Radical_acceptance">
            radical acceptance
          </ExternalLink>
          , self-determination, sex positivity,{" "}
          <ExternalLink href="https://en.wikipedia.org/wiki/Skepticism">
            skepticism
          </ExternalLink>
          ,{" "}
          <ExternalLink href="https://en.wikipedia.org/wiki/Taoism">
            Taoism
          </ExternalLink>
        </p>
        <SectionHeader id="lived-experiences" level={4} text="Lived experiences" />
        <ul>
          <li>
            mental health challenges (
            <i>
              <ExternalLink href="https://en.wikipedia.org/wiki/Anxiety_disorder">
                anxiety
              </ExternalLink>
              ,{" "}
              <ExternalLink href="https://en.wikipedia.org/wiki/Major_depressive_disorder">
                depression
              </ExternalLink>
              ,{" "}
              <ExternalLink href="https://en.wikipedia.org/wiki/Obsessive%E2%80%93compulsive_disorder">
                OCD
              </ExternalLink>
              ,{" "}
              <ExternalLink href="https://en.wikipedia.org/wiki/Occupational_burnout">
                burnout
              </ExternalLink>
              , suicidal ideation, perfectionism, people pleasing, PMDD,{" "}
              <ExternalLink href="https://en.wikipedia.org/wiki/Post-traumatic_stress_disorder">
                complex PTSD
              </ExternalLink>
            </i>
            )
          </li>
          <li>
            neurodivergence (
            <i>
              <ExternalLink href="https://en.wikipedia.org/wiki/Autism_spectrum">
                autism spectrum disorder
              </ExternalLink>
              ,{" "}
              <ExternalLink href="https://en.wikipedia.org/wiki/Dissociative_disorder">
                dissociative disorder
              </ExternalLink>
            </i>
            )
          </li>
          <li>
            trauma and abuse (
            <i>emotional, verbal, physical, sexual abuse and assault</i>)
          </li>
          <li>
            identity and body struggles (
            <i>
              addiction,{" "}
              <ExternalLink href="https://en.wikipedia.org/wiki/Gender_dysphoria">
                gender dysphoria
              </ExternalLink>
              , body dysmorphia,{" "}
              <ExternalLink href="https://en.wikipedia.org/wiki/Eating_disorder">
                disordered eating
              </ExternalLink>
              , queerness
            </i>
            )
          </li>
          <li>
            relationship and family struggles (
            <i>
              infidelity, parental divorce and custody battles, grief,
              bullying, social anxiety, stalking
            </i>
            )
          </li>
          <li>
            spiritual difficulties (
            <i>
              spiritual disconnect,{" "}
              <ExternalLink href="https://en.wikipedia.org/wiki/Religious_trauma">
                religious trauma
              </ExternalLink>
            </i>
            )
          </li>
          <li>
            major life transitions (
            <i>
              changing careers, losing a parent, coming out and transitioning
            </i>
            )
          </li>
        </ul>
        <SectionHeader
          id="therapies-practices-supports"
          level={4}
          text="Therapies, practices, and supports I’ve experienced"
        />
        <ul>
          <li>
            <ExternalLink href="https://en.wikipedia.org/wiki/Cognitive_behavioral_therapy">
              Cognitive Behavioral Therapy (CBT)
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://en.wikipedia.org/wiki/Dialectical_behavior_therapy">
              Dialectical Behavior Therapy (DBT)
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://en.wikipedia.org/wiki/Brainspotting">
              Brainspotting
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://en.wikipedia.org/wiki/Eye_movement_desensitization_and_reprocessing">
              Eye Movement Desensitization and Reprocessing (EMDR)
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://en.wikipedia.org/wiki/Somatic_psychology">
              Somatic Therapy
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://en.wikipedia.org/wiki/Neurofeedback">
              Neurofeedback
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://en.wikipedia.org/wiki/Internal_Family_Systems_Model">
              Internal Family Systems (IFS)
            </ExternalLink>
          </li>
          <li>group therapy</li>
          <li>
            various forms of meditation (mindfulness, transcendental, Metta,
            yoga, body scan)
          </li>
          <li>psychedelics (microdosing and macrodosing)</li>
          <li>art therapy</li>
          <li>movement (running, biking, weight lifting, hiking)</li>
          <li>self-advocacy</li>
          <li>psychiatric medications (antidepressants, antianxiety)</li>
        </ul>
        <p>
          <b>Whoa! That was a lot, I know.</b> We also don't have to talk about
          any of those things. It's important to know that you can speak to me
          about these topics if you want. Let's move on!
        </p>
      </Card>
      <Card>
        <SectionHeader id="what-i-offer" text="What I Offer" />
        <SectionHeader
          id="one-to-one-peer-support-sessions"
          level={3}
          text="1:1 Peer Support Sessions"
        />
        <p>A gentle, nonjudgmental space for:</p>
        <ul>
          <li>Talking through hard or tender things</li>
          <li>Reflecting on patterns, choices, or healing journeys</li>
          <li>Supporting trauma recovery, identity, and growth</li>
          <li>Learning new ways of being and healing</li>
          <li>Getting connected with effective resources</li>
        </ul>
        <p>
          Sessions are usually 45–60 minutes and held via Google Meet or phone.
        </p>
        <SectionHeader id="weekly-office-hours" level={3} text="Weekly Office Hours" />
        <p>
          Open time to ask questions, chat, or just hang out — no pressure to
          schedule a 1:1 session. Office hours are casual and freeform, and
          you’re welcome whether you’re curious about peer support, want to
          share space, or just need a familiar presence.
        </p>
      </Card>
      <Card>
        <SectionHeader id="who-this-is-for" text="Who This Is For" />
        <p>I’m particularly interested to connect with:</p>
        <ul>
          <li>People between the ages of 25 and 45</li>
          <li>Other queer and/or neurodivergent folks </li>
          <li>People navigating trauma, burnout, or recovery </li>
          <li>Adults who are masking, unmasking, or somewhere in between</li>
          <li>Those seeking community outside of clinical models</li>
        </ul>
        <p>If any of this resonates, I’d love to meet you.</p>
      </Card>
      <Card>
        <SectionHeader id="my-why" text="My Why" />
        <p>
          I have been in recovery for complex PTSD for over 10 years. Since
          receiving my first diagnosis at age 25, I’ve engaged with a wide range
          of healing practices, which I listed at the top of this page.
        </p>
        <p>
          I feel called to use all the valuable information I've acquired over
          the years to help others that are going through the same diagnoses,
          struggling in the same ways, and could use someone to listen or give
          advice.
        </p>
      </Card>
      <Card>
        <SectionHeader id="how-it-works" text="How It Works" />
        <p>
          You can check{" "}
          <ExternalLink href="https://cal.com/peachbutterprints">
            my available schedule here
          </ExternalLink>{" "}
          or{" "}
          <ExternalLink href="https://ig.me/m/peachbutterprints">
            send me a DM
          </ExternalLink>{" "}
          to request a session or ask about office hours. I’ll respond with
          availability and a simple intake form.
        </p>
        <p>NOTAFLOF: No One Turned Away For Lack Of Funds</p>
        <p>
          If you can give, donations help keep this space going. I suggest folks
          who are able contribute between $15–60 per session, but please choose
          what works for you.{" "}
        </p>
        <ul>
          <li>
            <i>
              For those with limited access to resources or experiencing
              financial instability:
            </i>{" "}
            $0 - $20
          </li>
          <li>
            <i>
              For those with some stability and/or access to discretionary
              income:
            </i>{" "}
            $20 - $50
          </li>
          <li>
            <i>
              For those with financial security and a desire to support access
              for others:
            </i>{" "}
            $50+
          </li>
        </ul>
        <p>
          Payment options:{" "}
          <ExternalLink href="https://venmo.com/u/DyannaTurner">
            Venmo
          </ExternalLink>
          ,{" "}
          <ExternalLink href="https://paypal.me/peachbutterprints">
            PayPal
          </ExternalLink>
          ,{" "}
          <ExternalLink href="https://cash.app/$DyannaTurner">
            CashApp
          </ExternalLink>
        </p>
      </Card>

    </div>
  );
};

export default PeerSupport;
